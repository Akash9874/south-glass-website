// Pre-generated SRI hashes for brochures
// These hashes are generated during the build process by scripts/generate-sri-hashes.js
export const brochureSRIHashes: Record<string, string> = {
  "/brochures/SG-BRAND Brochure.pdf": "sha384-GTwUUvItcTyosxAlDG98t8N1ZZel2QMbFcXDsk5AnSO0u61bWDsPNDtTFsUswsxL",
  "/brochures/SG-PRODUCT BROCHURE-FINAL.pdf": "sha384-F/ZMHtxSrKz4ZXgD/QR/BtcJlDZE5q++MJwlh41AP9JrqepT+XWMIwSs44ZAWJOk"
};

/**
 * Get SRI hash for a specific brochure
 * @param path - Path to the brochure file
 * @returns SRI hash or empty string if not found
 */
export function getBrochureSRIHash(path: string): string {
  return brochureSRIHashes[path] || '';
} 