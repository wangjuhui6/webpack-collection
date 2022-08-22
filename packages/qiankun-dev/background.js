async function run () {
  const data1 = await chrome.declarativeNetRequest.getDynamicRules()
  await chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        action: {
          redirect: {
            regexSubstitution: 'http://localhost:9001/\\1'
            // url: 'http://localhost:9001/',
          },
          type: 'redirect'
        },
        condition: {
          regexFilter: "http://lx.wangjuhui.top:21006/order/(.*)"
          // urlFilter: "http://lx.wangjuhui.top:21006/order/"
        },
        id: 10,
        priority: 1,
      }
    ],
    removeRuleIds: data1.map(rule => rule.id)
  })
  const data = await chrome.declarativeNetRequest.getDynamicRules()
  console.log(data)
}

run()

