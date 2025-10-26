/**
 * Quick API Test Script
 * 
 * Usage:
 * 1. Start dev server: npm run dev
 * 2. Run this script: node test-api.js
 * 
 * This will test the /api/optimize endpoint
 */

const testCampaign = {
  market: "China",
  ageRange: "25-34",
  gender: "all",
  segment: "luxury buyers",
  platform: "Meta",
  goal: "Sales",
  visualStyle: "black and white minimalist",
  headline: "Elegance in Every Detail",
  cta: "Buy Now",
  notes: "Premium watch campaign targeting affluent Chinese consumers"
};

async function testOptimizeAPI() {
  console.log('🧪 Testing AdPulse Optimize API...\n');
  console.log('📝 Test Campaign Data:');
  console.log(JSON.stringify(testCampaign, null, 2));
  console.log('\n⏳ Sending request to http://localhost:3000/api/optimize...\n');

  try {
    const startTime = Date.now();
    
    const response = await fetch('http://localhost:3000/api/optimize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testCampaign),
    });

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log(`⏱️  Response time: ${duration}s`);
    console.log(`📊 Status: ${response.status} ${response.statusText}\n`);

    const data = await response.json();

    if (data.error) {
      console.log('⚠️  API Error:', data.error);
      console.log('🔄 Using fallback mock recommendations\n');
    } else {
      console.log('✅ Success! AI Analysis Complete\n');
    }

    if (data.recommendations) {
      console.log('📋 Recommendations:\n');
      data.recommendations.forEach((rec, index) => {
        const icon = rec.status === 'success' ? '✅' : rec.status === 'warning' ? '⚠️' : '❌';
        console.log(`${index + 1}. ${icon} ${rec.title} [${rec.status.toUpperCase()}]`);
        console.log(`   ${rec.message}\n`);
      });
    }

    if (data.rawResponse) {
      console.log('🔍 Raw AI Response:');
      console.log(JSON.stringify(data.rawResponse, null, 2));
    }

    console.log('\n✅ Test completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('\n💡 Troubleshooting:');
    console.error('   1. Make sure dev server is running: npm run dev');
    console.error('   2. Check if port 3000 is available');
    console.error('   3. Verify .env.local has OPENAI_API_KEY');
    process.exit(1);
  }
}

// Run the test
testOptimizeAPI();

