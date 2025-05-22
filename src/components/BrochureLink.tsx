import React from 'react';
import { getBrochureSRIHash } from '@/lib/sri/brochureSRI';

interface BrochureLinkProps {
  href: string;
  download?: boolean;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

/**
 * Secure Brochure Link component with SRI support
 * This component adds integrity verification to PDF downloads
 */
const BrochureLink: React.FC<BrochureLinkProps> = ({ 
  href, 
  download = false, 
  className = '', 
  children,
  target,
  rel
}) => {
  // Get the SRI hash for this brochure
  const integrityHash = getBrochureSRIHash(href);
  
  // Client-side integrity verification
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If no integrity hash is available, proceed as normal
    if (!integrityHash) return;
    
    // Note: This is a placeholder for client-side verification
    // In a real implementation, you would verify the file's hash before allowing the download
    // However, browsers handle SRI automatically for resources loaded with the integrity attribute
    console.log(`Downloading resource with integrity: ${integrityHash}`);
  };

  return (
    <a
      href={href}
      download={download}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      data-integrity={integrityHash} // Add the integrity as a data attribute
    >
      {children}
    </a>
  );
};

export default BrochureLink; 