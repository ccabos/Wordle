// Test script to validate word lists
const fs = require('fs');

// Read the script file
const scriptContent = fs.readFileSync('script.js', 'utf8');

// Extract word lists using regex
const wordListsMatch = scriptContent.match(/const WORD_LISTS = ({[\s\S]*?});/);
if (!wordListsMatch) {
    console.error('Could not find WORD_LISTS');
    process.exit(1);
}

// Evaluate the word lists object
const WORD_LISTS = eval('(' + wordListsMatch[1] + ')');

console.log('=== WORD LIST VALIDATION ===\n');

let totalErrors = 0;

// Check each word list
for (const [length, words] of Object.entries(WORD_LISTS)) {
    const expectedLength = parseInt(length);
    console.log(`\nChecking ${expectedLength}-letter words (${words.length} total):`);

    let errors = 0;
    const wrongLengthWords = [];
    const duplicates = [];
    const seenWords = new Set();

    words.forEach((word, index) => {
        // Check length
        if (word.length !== expectedLength) {
            wrongLengthWords.push(`  "${word}" (${word.length} chars) at index ${index}`);
            errors++;
        }

        // Check for duplicates
        if (seenWords.has(word)) {
            duplicates.push(`  "${word}" (duplicate)`);
            errors++;
        }
        seenWords.add(word);

        // Check if all uppercase
        if (word !== word.toUpperCase()) {
            console.log(`  Warning: "${word}" is not all uppercase`);
        }
    });

    if (wrongLengthWords.length > 0) {
        console.log(`  ❌ Found ${wrongLengthWords.length} words with wrong length:`);
        wrongLengthWords.forEach(w => console.log(w));
    }

    if (duplicates.length > 0) {
        console.log(`  ❌ Found ${duplicates.length} duplicate words:`);
        duplicates.forEach(w => console.log(w));
    }

    if (errors === 0) {
        console.log(`  ✅ All ${words.length} words are valid`);
    } else {
        totalErrors += errors;
    }
}

console.log(`\n=== SUMMARY ===`);
if (totalErrors === 0) {
    console.log('✅ All word lists are valid!');
} else {
    console.log(`❌ Found ${totalErrors} total errors`);
    process.exit(1);
}
