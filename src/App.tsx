import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Download, 
  Github, 
  Terminal, 
  FileVideo, 
  Scissors, 
  Volume2, 
  VolumeX, 
  Layers, 
  Zap,
  ArrowRight,
  Check,
  Copy,
  Star,
  Users,
  Code,
  Sparkles,
  Monitor,
  Info,
  Settings,
  ChevronRight
} from 'lucide-react';

const App: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCode2, setCopiedCode2] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentStep, setCurrentStep] = useState(0);
  const [animatedElements, setAnimatedElements] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number}>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated background elements
  useEffect(() => {
    const generateElements = () => {
      const elements = [];
      for (let i = 0; i < 50; i++) {
        elements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
      setAnimatedElements(elements);
    };

    generateElements();
    window.addEventListener('resize', generateElements);
    return () => window.removeEventListener('resize', generateElements);
  }, []);

  // Animate background elements
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedElements(prev => prev.map(el => ({
        ...el,
        x: (el.x + 0.5) % window.innerWidth,
        y: el.y + Math.sin(Date.now() * 0.001 + el.id) * 0.5,
        opacity: 0.1 + Math.sin(Date.now() * 0.002 + el.id) * 0.2
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Terminal animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const copyToClipboard2 = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode2(true);
    setTimeout(() => setCopiedCode2(false), 2000);
  };
  const features = [
    {
      icon: <FileVideo className="w-8 h-8" />,
      title: "File Inspection",
      description: "Get detailed information about media files including resolution, duration, and stream details",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Lossless Conversion",
      description: "Change container formats without re-encoding, preserving original quality",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Video Trimming",
      description: "Cut videos by specifying start and end times with precision",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Audio Extraction",
      description: "Extract audio from videos into MP3, FLAC, or WAV formats",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <VolumeX className="w-8 h-8" />,
      title: "Audio Removal",
      description: "Create silent versions of videos by removing audio tracks",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Batch Processing",
      description: "Convert all video files in a directory to a specific format in one go",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  

  const terminalSteps = [
    {
      command: "$ ./ffmpeg-this",
      output: [
        "==============================================",
        "         ffmpeg-this",
        "==============================================",
        "",
        "1. Select a Media File to Process",
        "2. Batch Convert All Videos to a Format", 
        "3. Exit",
        "",
        "Choose an option (1-3): 1"
      ]
    },
    {
      command: "Scanning directory...",
      output: [
        "Found media files:",
        "1. vacation_video.mp4 (1.2GB)",
        "2. presentation.mkv (450MB)",
        "3. music_video.avi (800MB)",
        "",
        "Select a file (1-3): 1"
      ]
    },
    {
      command: "Analyzing vacation_video.mp4...",
      output: [
        "===============================================",
        "     Actions for: vacation_video.mp4",
        "===============================================",
        "",
        "📊 File Info: 1920x1080, 00:15:32, H.264/AAC",
        "",
        "1. 🔍 Inspect File Details",
        "2. 🔄 Convert (Lossless)",
        "3. 📦 Convert (Smaller File Size)",
        "4. ✂️  Trim Video",
        "5. 🎵 Extract Audio",
        "6. 🔇 Remove Audio",
        "7. ⚡ Batch Convert All",
        "",
        "Choose an action (1-7): _"
      ]
    }
  ];
  return (
    <>
      {/* Animated background particles */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {animatedElements.map(el => (
          <div
            key={el.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: el.x,
              top: el.y,
              width: el.size,
              height: el.size,
              opacity: el.opacity,
              boxShadow: `0 0 ${el.size * 2}px rgba(59, 130, 246, ${el.opacity})`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="absolute w-32 h-32 border rounded-full top-20 left-10 border-purple-500/20 animate-pulse" />
        <div className="absolute w-24 h-24 rotate-45 border top-40 right-20 border-blue-500/20 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute w-16 h-16 rounded-lg bottom-40 left-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute w-20 h-20 border-2 rounded-full bottom-20 right-40 border-green-500/20 animate-ping" style={{ animationDuration: '4s' }} />
      </div>
      <div className="min-h-screen overflow-x-hidden text-white bg-gray-900">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        
        {/* Additional animated gradients */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 via-transparent to-pink-600/20"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-bl from-orange-600/10 via-transparent to-blue-600/10"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-50 px-6 py-4">
        <nav className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">ffmPEG-this</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="transition-colors hover:text-blue-400">Features</a>
            <a href="#download" className="transition-colors hover:text-blue-400">Download</a>
            <a href="https://github.com/hariharen9/ffmpeg-this" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 transition-colors hover:text-blue-400">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-40 px-6 py-20">
        <div className="mx-auto text-center max-w-7xl">
          <div className="inline-flex items-center px-4 py-2 mb-8 space-x-2 border rounded-full bg-blue-500/10 border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">Powerful FFmpeg Made Simple</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text">
              Convert Media
            </span>
            <br />
            <span className="text-white">Like a Pro</span>
          </h1>
          
          <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed text-gray-300">
            A powerful batch script for converting, manipulating, and inspecting media files 
            using FFmpeg. No complex commands needed—just an intuitive menu-driven interface.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://github.com/hariharen9/ffmpeg-this/releases/latest" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-lg font-semibold transition-all duration-300 transform rounded-full group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Now</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid max-w-lg grid-cols-3 gap-8 mx-auto mt-16">
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-blue-400">10K+</div>
              <div className="text-sm text-gray-400">Downloads</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-green-400">3</div>
              <div className="text-sm text-gray-400">Platforms</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-purple-400">MIT</div>
              <div className="text-sm text-gray-400">License</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Powerful Features
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Everything you need to handle media files efficiently, wrapped in an intuitive interface
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="relative p-8 transition-all duration-300 border group bg-gray-800/50 backdrop-blur-sm border-gray-700/50 rounded-2xl hover:border-blue-500/50 hover:transform hover:scale-105"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold">{feature.title}</h3>
                <p className="leading-relaxed text-gray-300">{feature.description}</p>
                
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="relative z-40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Simple to Use
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              No complex FFmpeg commands to remember. Just run the script and follow the interactive menu.
            </p>
          </div>
          
          <div className="grid gap-8 mx-auto lg:grid-cols-2 max-w-7xl">
            {/* First Terminal - Basic Usage */}
            <div className="overflow-hidden border bg-gray-800/80 backdrop-blur-sm border-gray-700/50 rounded-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700/50">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-400">Getting Started</span>
                <button 
                  onClick={() => copyToClipboard('./ffmpeg-this')}
                  className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-white"
                >
                  {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="text-sm">{copiedCode ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="mb-2 text-green-400">$ ./ffmpeg-this</div>
                <div className="mb-4 text-gray-300">
                  <div>==============================================</div>
                  <div className="text-blue-400">         ffmpeg-this</div>
                  <div>==============================================</div>
                  <div className="mt-4">
                    <div>1. Select a Media File to Process</div>
                    <div>2. Batch Convert All Videos to a Format</div>
                    <div>3. Exit</div>
                  </div>
                  <div className="mt-4 text-yellow-400">Choose an option (1-3): _</div>
                </div>
              </div>
            </div>

            {/* Second Terminal - Detailed UI */}
            <div className="overflow-hidden border bg-gray-800/80 backdrop-blur-sm border-gray-700/50 rounded-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700/50">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-400">Interactive Menu</span>
                <button 
                  onClick={() => copyToClipboard2('ffmpeg-this')}
                  className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-white"
                >
                  {copiedCode2 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="text-sm">{copiedCode2 ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-6 overflow-hidden font-mono text-sm h-80">
                <div className="mb-2 text-green-400">{terminalSteps[currentStep].command}</div>
                <div className="text-gray-300 transition-all duration-500">
                  {terminalSteps[currentStep].output.map((line, index) => (
                    <div 
                      key={index} 
                      className={`${
                        line.includes('📊') ? 'text-cyan-400' :
                        line.includes('🔍') || line.includes('🔄') || line.includes('📦') || 
                        line.includes('✂️') || line.includes('🎵') || line.includes('🔇') || 
                        line.includes('⚡') ? 'text-blue-400 hover:text-white cursor-pointer' :
                        line.includes('ffmpeg-this') ? 'text-purple-400' :
                        line.includes('Choose') || line.includes('Select') ? 'text-yellow-400' :
                        line.includes('.mp4') || line.includes('.mkv') || line.includes('.avi') ? 'text-green-400' :
                        'text-gray-300'
                      } ${line.includes('🔍') || line.includes('🔄') ? 'pl-2 border-l-2 border-blue-500/30' : ''}`}
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: currentStep === 2 && (line.includes('🔍') || line.includes('🔄')) ? 'pulse 2s infinite' : 'none'
                      }}
                    >
                      {line}
                    </div>
                  ))}
                  {currentStep === 2 && (
                    <div className="mt-2 text-yellow-400 animate-pulse">
                      <ChevronRight className="inline w-4 h-4 mr-1" />
                      Waiting for selection...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {terminalSteps.map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep ? 'bg-blue-500 scale-125' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Download Now
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Get started in seconds. Available for Windows, macOS, and Linux.
            </p>
          </div>
          
          <div className="text-center">
            <a href="https://github.com/hariharen9/ffmpeg-this/releases/latest" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 text-lg font-semibold transition-all duration-300 transform rounded-full group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download from GitHub</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-8 py-4 space-x-6 border rounded-full bg-gray-800/30 backdrop-blur-sm border-gray-700/50">
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-blue-400" />
                <span>Open Source</span>
              </div>
              <div className="w-px h-6 bg-gray-700"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>MIT License</span>
              </div>
              <div className="w-px h-6 bg-gray-700"></div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <span>Community Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="relative z-40 px-6 py-20 bg-gray-800/20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Quick Start
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Get up and running in three simple steps
            </p>
          </div>
          
          <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-2xl font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                1
              </div>
              <h3 className="mb-4 text-xl font-bold">Download</h3>
              <p className="text-gray-300">
                Download the executable for your operating system from our releases page
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-2xl font-bold rounded-full bg-gradient-to-r from-purple-500 to-pink-600">
                2
              </div>
              <h3 className="mb-4 text-xl font-bold">Place & Run</h3>
              <p className="text-gray-300">
                Place the file in your media directory and run it from your terminal
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-2xl font-bold rounded-full bg-gradient-to-r from-pink-500 to-red-600">
                3
              </div>
              <h3 className="mb-4 text-xl font-bold">Start Converting</h3>
              <p className="text-gray-300">
                Follow the interactive menu to convert, trim, or inspect your media files
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 px-6 py-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center mb-4 space-x-2 md:mb-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ffmPEG-this</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://github.com/hariharen9/ffmpeg-this/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">Documentation</a>
              <a href="httpshttps://github.com/hariharen9/ffmpeg-this" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">GitHub</a>
              <a href="https://github.com/hariharen9/ffmpeg-this/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">Issues</a>
              <a href="https://github.com/hariharen9/ffmpeg-this/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">License</a>
            </div>
          </div>
          
          <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
                        <p>&copy; 2025 ffmPEG-this. Released under the MIT License.</p>
            <p className="mt-4">Made with ❤️ by <a href="https://hariharen9.site" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Hariharen</a></p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default App;