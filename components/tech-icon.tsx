"use client"
import { Code, Database, Globe, Server, Cpu, Cloud, Layers, Smartphone } from "lucide-react"

interface TechIconProps {
  name: string
  className?: string
  color?: string
  size?: number
}

export default function TechIcon({ name, className = "", color = "currentColor", size = 24 }: TechIconProps) {
  const iconProps = {
    size,
    color,
    className,
  }

  switch (name.toLowerCase()) {
    case "code":
      return <Code {...iconProps} />
    case "database":
      return <Database {...iconProps} />
    case "globe":
      return <Globe {...iconProps} />
    case "server":
      return <Server {...iconProps} />
    case "cpu":
      return <Cpu {...iconProps} />
    case "cloud":
      return <Cloud {...iconProps} />
    case "layers":
      return <Layers {...iconProps} />
    case "smartphone":
      return <Smartphone {...iconProps} />
    case "react":
      return <Code {...iconProps} className={`text-[#61DAFB] ${className}`} />
    case "nextjs":
      return <Server {...iconProps} className={`text-black ${className}`} />
    case "typescript":
      return <Code {...iconProps} className={`text-[#3178C6] ${className}`} />
    case "javascript":
      return <Code {...iconProps} className={`text-[#F7DF1E] ${className}`} />
    case "nodejs":
      return <Server {...iconProps} className={`text-[#339933] ${className}`} />
    case "mongodb":
      return <Database {...iconProps} className={`text-[#47A248] ${className}`} />
    case "postgresql":
      return <Database {...iconProps} className={`text-[#336791] ${className}`} />
    case "tailwindcss":
      return <Layers {...iconProps} className={`text-[#06B6D4] ${className}`} />
    case "graphql":
      return <Globe {...iconProps} className={`text-[#E10098] ${className}`} />
    case "docker":
      return <Cloud {...iconProps} className={`text-[#2496ED] ${className}`} />
    case "aws":
      return <Cloud {...iconProps} className={`text-[#FF9900] ${className}`} />
    default:
      return <Code {...iconProps} />
  }
}

