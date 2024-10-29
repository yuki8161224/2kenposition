let currentBlock = 0;
const totalBlocks = 4; // Total number of blocks
const blockHeightPercentage = 0.25; // 25% of the total height

function goToNextBlock() {
    if (currentBlock < totalBlocks - 1) {
        currentBlock++;
        scrollToBlock(currentBlock);
    }
}

function goToPreviousBlock() {
    if (currentBlock > 0) {
        currentBlock--;
        scrollToBlock(currentBlock);
    }
}

function scrollToBlock(blockNumber) {
    const totalHeight = document.documentElement.scrollHeight; // Total document height
    const targetPosition = blockNumber * (totalHeight * blockHeightPercentage); // Calculate target position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Optional: Update block height on window resize
window.addEventListener('resize', () => {
    const totalHeight = document.documentElement.scrollHeight; // Total document height
    const targetPosition = currentBlock * (totalHeight * blockHeightPercentage); // Recalculate current target position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});
