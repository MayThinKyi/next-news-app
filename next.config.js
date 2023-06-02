/** @type {import('next').NextConfig} */
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")
module.exports = 
{   reactStrictMode: true, 
    swcMinify: true,
       images: { domains: ["i.imgur.com","imgur.com","photos.marinetraffic.com", "images2.imgbox.com","farm5.staticflickr.com"], 
       remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
        {
          protocol: "http",
          hostname: "**",
        },
      ], 
            }, }


  
