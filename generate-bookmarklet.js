const fs = require("fs");

try {
  const originalScript = fs.readFileSync("input.js", "utf-8");
  const encodedScript = encodeURIComponent(originalScript);
  const bookmarklet = `javascript:void function(){${encodedScript}}()`;

  fs.writeFileSync("output.txt", bookmarklet, "utf-8");

  console.log(`✅ Successfully wrote bookmarklet to ./output.txt`);
} catch (error) {
  console.error(`❌ Error generating bookmarklet`, error);
}
