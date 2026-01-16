import React, { useEffect, useRef, useState, useCallback } from 'react';

interface RipplePoint {
  x: number;
  y: number;
  time: number;
  intensity: number;
}

function WebGLWaterRipple() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [mouseIntensity, setMouseIntensity] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animationRef = useRef<number>(0);
  const ripplesRef = useRef<RipplePoint[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastMouseMoveTime = useRef(0);

  // Vertex shader - simple full-screen quad
  const vertexShaderSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // Fragment shader with realistic water effects
  const fragmentShaderSource = `
    precision mediump float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_ripple_pos;
    uniform float u_ripple_time;
    uniform float u_ripple_intensity;
    uniform vec2 u_mouse_pos;
    uniform float u_mouse_intensity;
    
    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      
      // Base water color with slight blue tint for visibility
      vec3 waterColor = vec3(0.1, 0.3, 0.6);
      
      // Calculate ripple effect
      float rippleEffect = 0.0;
      if (u_ripple_intensity > 0.0) {
        float dist = distance(uv, u_ripple_pos);
        float wave = sin(dist * 30.0 - u_ripple_time * 8.0) * exp(-dist * 5.0) * exp(-u_ripple_time * 0.8);
        rippleEffect = wave * u_ripple_intensity;
      }
      
      // Calculate mouse hover effect
      float mouseEffect = 0.0;
      if (u_mouse_intensity > 0.0) {
        float mouseDist = distance(uv, u_mouse_pos);
        float mouseWave = sin(mouseDist * 25.0 - u_time * 3.0) * exp(-mouseDist * 8.0);
        mouseEffect = mouseWave * u_mouse_intensity * 0.3;
      }
      
      // Base wave animation
      float wave1 = sin(uv.x * 10.0 + u_time * 0.005) * 0.1;
      float wave2 = sin(uv.y * 8.0 + u_time * 0.003) * 0.1;
      
      // Combine all effects
      float totalEffect = rippleEffect + mouseEffect + wave1 + wave2;
      
      // Make effect more visible by increasing intensity
      waterColor += totalEffect * 0.5;
      
      // Output with some transparency but make it visible
      gl_FragColor = vec4(waterColor, 0.3 + abs(totalEffect) * 0.7);
    }
  `;

  const createShader = useCallback((gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null => {
    const shader = gl.createShader(type);
    if (!shader) return null;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }, []);

  const createProgram = useCallback((gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | null => {
    const program = gl.createProgram();
    if (!program) return null;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }

    return program;
  }, []);

  const initWebGL = useCallback(() => {
    if (!canvasRef.current) {
      console.log('Canvas ref not available');
      return false;
    }

    const canvas = canvasRef.current;
    console.log('Canvas element:', canvas);
    console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
    
    try {
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl || !(gl instanceof WebGLRenderingContext)) {
        console.warn('WebGL not supported, falling back to CSS animation');
        return false;
      }
      
      console.log('WebGL context created successfully:', gl);

      glRef.current = gl;

      // Create shaders
      const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        
        if (!vertexShader || !fragmentShader) {
          console.error('Failed to create shaders');
          return false;
        }
        
        console.log('Shaders created successfully');

      // Create program
      const program = createProgram(gl, vertexShader, fragmentShader);
      if (!program) {
        console.error('Failed to create program');
        return false;
      }

      console.log('WebGL program created successfully');
      programRef.current = program;

      // Create vertex buffer for full-screen quad
      const vertices = new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1
      ]);

      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      const positionLocation = gl.getAttribLocation(program, 'a_position');
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      resizeCanvas();
      
      console.log('WebGL initialization completed successfully');
      return true;
    } catch (error) {
      console.error('WebGL initialization error:', error);
      return false;
    }
  }, [createShader, createProgram, vertexShaderSource, fragmentShaderSource]);

  const addRipple = useCallback((x: number, y: number, intensity: number = 1.0) => {
    const currentTime = Date.now();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    ripplesRef.current.push({
      x: (x - rect.left) / rect.width,
      y: 1 - (y - rect.top) / rect.height,
      time: currentTime,
      intensity
    });

    // Keep only recent ripples (max 5 for performance)
    ripplesRef.current = ripplesRef.current.filter(ripple => 
      currentTime - ripple.time < 3000
    ).slice(-5);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const currentTime = Date.now();
    const x = (event.clientX - rect.left) / rect.width;
    const y = 1 - (event.clientY - rect.top) / rect.height;
    
    mouseRef.current = { x, y };
    lastMouseMoveTime.current = currentTime;
    setIsMouseOver(true);

    // Create subtle mouse trail ripples (throttled)
    if (currentTime - lastMouseMoveTime.current > 100) {
      setMouseIntensity(0.2);
      setTimeout(() => setMouseIntensity(0), 500);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseOver(false);
    setMouseIntensity(0);
  }, []);

  const handleClick = useCallback((event: MouseEvent) => {
    addRipple(event.clientX, event.clientY, 2.0); // Strong ripple on click
  }, [addRipple]);

  const render = useCallback(() => {
    const gl = glRef.current;
    const program = programRef.current;
    const canvas = canvasRef.current;
    
    if (!gl || !program || !canvas) {
      console.log('Render skipped - missing refs:', {
        gl: !!gl,
        program: !!program,
        canvas: !!canvas
      });
      animationRef.current = requestAnimationFrame(render);
      return;
    }

    const currentTime = Date.now();
    console.log('Rendering frame...');

    // Set viewport
    gl.viewport(0, 0, canvas.width, canvas.height);
    
    // Clear canvas with transparent background
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // Enable blending for transparency
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    
    // Use shader program
    gl.useProgram(program);
    
    // Set uniforms
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const ripplePosLocation = gl.getUniformLocation(program, 'u_ripple_pos');
    const rippleTimeLocation = gl.getUniformLocation(program, 'u_ripple_time');
    const rippleIntensityLocation = gl.getUniformLocation(program, 'u_ripple_intensity');
    const mousePosLocation = gl.getUniformLocation(program, 'u_mouse_pos');
    const mouseIntensityLocation = gl.getUniformLocation(program, 'u_mouse_intensity');

    if (resolutionLocation) {
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    }
    
    if (timeLocation) {
      gl.uniform1f(timeLocation, currentTime * 0.001);
    }
    
    console.log('Setting uniforms - time:', currentTime, 'resolution:', canvas.width, canvas.height);

    // Handle ripples
    const activeRipples = ripplesRef.current.filter(ripple => 
      currentTime - ripple.time < 3000
    );

    if (activeRipples.length > 0 && ripplePosLocation && rippleTimeLocation && rippleIntensityLocation) {
      const latestRipple = activeRipples[activeRipples.length - 1];
      gl.uniform2f(ripplePosLocation, latestRipple.x, latestRipple.y);
      gl.uniform1f(rippleTimeLocation, (currentTime - latestRipple.time) * 0.001);
      gl.uniform1f(rippleIntensityLocation, latestRipple.intensity);
    } else if (ripplePosLocation && rippleTimeLocation && rippleIntensityLocation) {
      gl.uniform2f(ripplePosLocation, 0.0, 0.0);
      gl.uniform1f(rippleTimeLocation, 999.0);
      gl.uniform1f(rippleIntensityLocation, 0.0);
    }

    // Handle mouse effects
    if (mousePosLocation && mouseIntensityLocation) {
      gl.uniform2f(mousePosLocation, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(mouseIntensityLocation, isMouseOver ? mouseIntensity : 0.0);
    }

    // Draw
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    
    console.log('Frame rendered successfully');

    animationRef.current = requestAnimationFrame(render);
  }, [isMouseOver, mouseIntensity]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
  }, []);

  useEffect(() => {
    console.log('WebGLWaterRipple component mounting...');
    
    if (!initWebGL()) {
      console.warn('Failed to initialize WebGL');
      return;
    }

    resizeCanvas();
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);

    // Start render loop
    animationRef.current = requestAnimationFrame(render);

    return () => {
      // Cleanup
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [initWebGL, resizeCanvas, handleMouseMove, handleMouseLeave, handleClick, render]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ 
        zIndex: 2,
        display: 'block',
        background: 'transparent',
        opacity: 1
      }}
    />
  );
}

function FallbackWaterEffect() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-transparent animate-pulse" />
      </div>
    </div>
  );
}

interface WebGLBackgroundProps {
  className?: string;
}

export default function WebGLBackground({ className = '' }: WebGLBackgroundProps) {
  const [isClient, setIsClient] = useState(false);
  const [supportsWebGL, setSupportsWebGL] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const hasWebGL = !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    setSupportsWebGL(hasWebGL);
    
    console.log('WebGL support:', hasWebGL);
    console.log('Prefers reduced motion:', window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  if (!isClient) return null;

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`} style={{ zIndex: 1 }}>
      {supportsWebGL && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? (
        <WebGLWaterRipple />
      ) : (
        <FallbackWaterEffect />
      )}
    </div>
  );
}