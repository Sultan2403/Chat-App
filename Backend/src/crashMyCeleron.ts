import axios from 'axios';

async function crashMyCeleron() {
  const targetUser = 'Zhigalko_Sergei';
  // We'll ask for opening info and clocks to make the payload even heavier
  const url = `https://lichess.org/api/games/user/${targetUser}?opening=true&clocks=true`;

  console.log(`🚀 Launching request to fetch ALL games for ${targetUser}...`);
  console.log(`⏳ Axios is now buffering the NDJSON text stream into RAM. Stand by...`);
  
  // Track memory usage in real-time while we wait
  const memoryInterval = setInterval(() => {
    const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`[RAM Usage]: ${memoryUsage.toFixed(2)} MB`);
  }, 1000);

  try {
    const response = await axios.get(url, {
      // Intentionally NOT setting responseType: 'stream'
      headers: { 'Accept': 'application/x-ndjson' }
    });

    // If it somehow survives the fetch, this string split will definitely finish it off
    console.log("🔥 Payload received! Attempting massive string split...");
    const parsed = response.data.trim().split('\n').map((line: string) => JSON.parse(line));
    
    console.log(`✅ Miracle! Parsed ${parsed.length} games without dying.`);
    clearInterval(memoryInterval);
  } catch (error: any) {
    clearInterval(memoryInterval);
    console.error("❌ Process terminated or failed:", error.message);
  }
}

crashMyCeleron();
