import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
}

interface Connection {
  from: Node;
  to: Node;
}

export function NeuralNetwork() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    // Generate nodes
    const generatedNodes: Node[] = [];
    for (let i = 0; i < 20; i++) {
      generatedNodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }
    setNodes(generatedNodes);

    // Generate connections between nearby nodes
    const generatedConnections: Connection[] = [];
    for (let i = 0; i < generatedNodes.length; i++) {
      for (let j = i + 1; j < generatedNodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(generatedNodes[i].x - generatedNodes[j].x, 2) +
          Math.pow(generatedNodes[i].y - generatedNodes[j].y, 2)
        );
        if (distance < 25 && Math.random() > 0.5) {
          generatedConnections.push({
            from: generatedNodes[i],
            to: generatedNodes[j],
          });
        }
      }
    }
    setConnections(generatedConnections);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg className="w-full h-full" style={{ minHeight: '100%' }}>
        {/* Connections */}
        {connections.map((connection, index) => (
          <motion.line
            key={index}
            x1={`${connection.from.x}%`}
            y1={`${connection.from.y}%`}
            x2={`${connection.to.x}%`}
            y2={`${connection.to.y}%`}
            stroke="url(#gradient-line)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="url(#gradient-node)"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E89422" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <radialGradient id="gradient-node">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E89422" stopOpacity="0.8" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
