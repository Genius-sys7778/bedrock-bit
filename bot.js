const bedrock = require("bedrock-protocol")

const client = bedrock.createClient({
  host: "1234-CSSM.aternos.me",
  port: 47043,
  username: "AFKBot"
})

client.on("join", () => {
  console.log("Бот зашел!")

  setInterval(() => {
    console.log("AFK...")
  }, 5000)
})

client.on("error", (err) => {
  console.log(err)
})
