

// https://graph.facebook.com/v10.0/3713620758886014/events?access_token=EAA0xhLYp9n4BO4OtzAX6Yy2IaOgQdZAxvcNcmmjaL03zda7fiJG01PjrTlDEmTYXnQz58umZAUYvjPH0LhdqPvlwDcmorQe22BZAUkZAPtcPZC2oJEczMWBOgh8My3kfR713nqNC3rXipgWuy6uvp8jp67Y4ClqT65DjY3pvMXCZAZCUw6uEOIucv0y87rmo8Bp&data=[{"action_source":"website","event_name":"Purchase","event_time":{date:U},"custom_data":{"currency":"USD","value":{sub_id_16}},"event_source_url":"{_sub_id_13}","user_data":{"external_id": "{subid}","client_ip_address":"{_ip}","client_user_agent":"{_user_agent}","fbc":"fb.1.{date:U}.{_sub_id_10}","fbp":"fb.1.{date:U}.{random:1,9999}"}}]


// data=[{"action_source":"website","event_name":"Purchase","event_time":{date:U},"custom_data":{"currency":"USD","value":{sub_id_16}},"event_source_url":"{_sub_id_13}","user_data":{"external_id": "{subid}","client_ip_address":"{_ip}","client_user_agent":"{_user_agent}","fbc":"fb.1.{date:U}.{_sub_id_10}","fbp":"fb.1.{date:U}.{random:1,9999}"}}]



// //default : https://graph.facebook.com/v10.0/3713620758886014/events?access_token=EAA0xhLYp9n4BO4OtzAX6Yy2IaOgQdZAxvcNcmmjaL03zda7fiJG01PjrTlDEmTYXnQz58umZAUYvjPH0LhdqPvlwDcmorQe22BZAUkZAPtcPZC2oJEczMWBOgh8My3kfR713nqNC3rXipgWuy6uvp8jp67Y4ClqT65DjY3pvMXCZAZCUw6uEOIucv0y87rmo8Bp&data=[event=CUSTOM_APP_EVENTS,custom_events=[{%22_eventName%22:%22fb_mobile_purchase%22,%22_valueToSum%22:100.00,%22fb_currency%22:%22USD%22}],advertiser_id=your_advertiser_id,advertiser_tracking_enabled=1,application_tracking_enabled=1,extinfo=["mb1"],"user_data":{"external_id": "{subid}","client_ip_address":"{_ip}","client_user_agent":"{_user_agent}","fbc":"fb.1.{date:U}.{_sub_id_10}","fbp":"fb.1.{date:U}.{random:1,9999}"}}]"


// //new: https://graph.facebook.com/v10.0/3713620758886014/activities?access_token=EAA0xhLYp9n4BO4OtzAX6Yy2IaOgQdZAxvcNcmmjaL03zda7fiJG01PjrTlDEmTYXnQz58umZAUYvjPH0LhdqPvlwDcmorQe22BZAUkZAPtcPZC2oJEczMWBOgh8My3kfR713nqNC3rXipgWuy6uvp8jp67Y4ClqT65DjY3pvMXCZAZCUw6uEOIucv0y87rmo8Bp&event=CUSTOM_APP_EVENTS&custom_events=[{%22_eventName%22:%22fb_mobile_purchase%22,%22_valueToSum%22:100.00,%22fb_currency%22:%22USD%22}]&advertiser_id=your_advertiser_id&advertiser_tracking_enabled=1&application_tracking_enabled=1&extinfo=["mb1"]&user_data={%22external_id%22:%22user123%22,%22client_ip_address%22:%22192.168.1.1%22,%22client_user_agent%22:%22Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/91.0.4472.124%20Safari/537.36%22,%22fbc%22:%22fb.1.1625247600.abcdefg%22,%22fbp%22:%22fb.1.1625247600.1234%22}

// payload = {
//   "access_token": "EAABsbCS1iHgBABZDZD",
//   "event": "CUSTOM_APP_EVENTS",
//   "custom_events": json.dumps([{
//       "_eventName": "fb_mobile_purchase",
//       "_valueToSum": 100.00,
//       "fb_currency": "USD"
//   }]),
//   "advertiser_id": "your_advertiser_id",
//   "advertiser_tracking_enabled": 1,
//   "application_tracking_enabled": 1,
//   "extinfo": json.dumps(["mb1"]),
//   "user_data": {
//       "external_id": "user123",
//       "client_ip_address": "192.168.1.1",
//       "client_user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
//       "fbc": "fb.1.1625247600.abcdefg",
//       "fbp": "fb.1.1625247600.1234"
//   }
// }


// https://graph.facebook.com/v10.0/3713620758886014/activities?access_token=EAA0xhLYp9n4BO4OtzAX6Yy2IaOgQdZAxvcNcmmjaL03zda7fiJG01PjrTlDEmTYXnQz58umZAUYvjPH0LhdqPvlwDcmorQe22BZAUkZAPtcPZC2oJEczMWBOgh8My3kfR713nqNC3rXipgWuy6uvp8jp67Y4ClqT65DjY3pvMXCZAZCUw6uEOIucv0y87rmo8Bp&event=CUSTOM_APP_EVENTS&custom_events=[{%22_eventName%22:%22fb_mobile_purchase%22,%22_valueToSum%22:100.00,%22fb_currency%22:%22USD%22}]&advertiser_id=your_advertiser_id&advertiser_tracking_enabled=1&application_tracking_enabled=1&extinfo=["mb1"]&user_data={%22external_id%22:%22user123%22,%22client_ip_address%22:%22192.168.1.1%22,%22client_user_agent%22:%22Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/91.0.4472.124%20Safari/537.36%22,%22fbc%22:%22fb.1.1625247600.abcdefg%22,%22fbp%22:%22fb.1.1625247600.1234%22}




// data=[{"action_source":"website","event_name":"Purchase","event_time":{date:U},"custom_data":{"currency":"USD","value":{sub_id_16}},"event_source_url":"{_sub_id_13}",



// https://graph.facebook.com/v10.0/3713620758886014/activities?access_token=EAA0xhLYp9n4BO4OtzAX6Yy2IaOgQdZAxvcNcmmjaL03zda7fiJG01PjrTlDEmTYXnQz58umZAUYvjPH0LhdqPvlwDcmorQe22BZAUkZAPtcPZC2oJEczMWBOgh8My3kfR713nqNC3rXipgWuy6uvp8jp67Y4ClqT65DjY3pvMXCZAZCUw6uEOIucv0y87rmo8Bp&event=CUSTOM_APP_EVENTS&custom_events=[{%22_eventName%22:%22fb_mobile_purchase%22,%22_valueToSum%22:100.00,%22fb_currency%22:%22USD%22}]&advertiser_id=your_advertiser_id&advertiser_tracking_enabled=1&application_tracking_enabled=1&extinfo=["mb1"]

// &advertiser_id=your_advertiser_id&advertiser_tracking_enabled=1&application_tracking_enabled=1&extinfo=["mb1"]
// "user_data":{"external_id": "{subid}","client_ip_address":"{_ip}","client_user_agent":"{_user_agent}","fbc":"fb.1.{date:U}.{_sub_id_10}","fbp":"fb.1.{date:U}.{random:1,9999}"}}]


// "access_token": "EAABsbCS1iHgBABZDZD",
//   "event": "CUSTOM_APP_EVENTS",

//   "custom_events": json.dumps([{
//     "_eventName": "fb_mobile_purchase",
//     "_valueToSum": 100.00,
//     "fb_currency": "USD"
// }]),


// "event":"CUSTOM_APP_EVENTS","custom_events":[{%22_eventName%22:%22fb_mobile_purchase%22,%22_valueToSum%22:100.00,%22fb_currency%22:%22USD%22}]

// const data = {
//   "access_token": "EAABsbCS1iHgBABZDZD","event": "CUSTOM_APP_EVENTS","custom_events": [{
//     "_eventName": "fb_mobile_purchase",
//     "_valueToSum": 100.00,
//     "fb_currency": "USD"
// }],"advertiser_id":"your_advertiser_id","advertiser_tracking_enabled":"1","application_tracking_enabled":'1',"extinfo":["mb1"],"user_data":{"external_id": "{subid}","client_ip_address":"{_ip}","client_user_agent":"{_user_agent}","fbc":"fb.1.{date:U}.{_sub_id_10}","fbp":"fb.1.{date:U}.{random:1,9999}"}}]



// }



// data=[{
//   "access_token": "EAABsbCS1iHgBABZDZD",
//   "event": "CUSTOM_APP_EVENTS",
//   "custom_events": [{
//       "_eventName": "fb_mobile_purchase",
//       "_valueToSum": {sub_id_16},
//       "fb_currency": "USD"
//   }],
//   "advertiser_id": "your_advertiser_id",
//   "advertiser_tracking_enabled": 1,
//   "application_tracking_enabled": 1,
//   "extinfo": ["mb1"],
//   "event_time":{date:U},
//   "event_source_url":"{_sub_id_13}",
//   "user_data":{"external_id": "{subid}","client_ip_address":"{_ip}","client_user_agent":"{_user_agent}","fbc":"fb.1.{date:U}.{_sub_id_10}","fbp":"fb.1.{date:U}.{random:1,9999}"},
// }]

// data=[{"action_source":"website","event_name":"Purchase","event_time":{date:U},"custom_data":{"currency":"USD","value":{sub_id_16}},"event_source_url":"{_sub_id_13}","user_data":{"external_id": "{subid}","client_ip_address":"{_ip}","client_user_agent":"{_user_agent}","fbc":"fb.1.{date:U}.{_sub_id_10}","fbp":"fb.1.{date:U}.{random:1,9999}"}}]


// //https://graph.facebook.com/v10.0/3713620758886014/activities?access_token=EAA0xhLYp9n4BO4OtzAX6Yy2IaOgQdZAxvcNcmmjaL03zda7fiJG01PjrTlDEmTYXnQz58umZAUYvjPH0LhdqPvlwDcmorQe22BZAUkZAPtcPZC2oJEczMWBOgh8My3kfR713nqNC3rXipgWuy6uvp8jp67Y4ClqT65DjY3pvMXCZAZCUw6uEOIucv0y87rmo8Bp&event=CUSTOM_APP_EVENTS&custom_events=[{%22_eventName%22:%22fb_mobile_purchase%22,%22_valueToSum%22:100.00,%22fb_currency%22:%22USD%22}]&advertiser_id=your_advertiser_id&advertiser_tracking_enabled=1&application_tracking_enabled=1&extinfo=["mb1"]&user_data={"user_data":{"external_id": "{subid}","client_ip_address":"{_ip}","client_user_agent":"{_user_agent}","fbc":"fb.1.{date:U}.{_sub_id_10}","fbp":"fb.1.{date:U}.{random:1,9999}"}


// ////const constructedLink : https://graph.facebook.com/v10.0/3713620758886014/events?access_token=EAA0xhLYp9n4BO4OtzAX6Yy2IaOgQdZAxvcNcmmjaL03zda7fiJG01PjrTlDEmTYXnQz58umZAUYvjPH0LhdqPvlwDcmorQe22BZAUkZAPtcPZC2oJEczMWBOgh8My3kfR713nqNC3rXipgWuy6uvp8jp67Y4ClqT65DjY3pvMXCZAZCUw6uEOIucv0y87rmo8Bp&data
// //https://graph.facebook.com/v10.0/3713620758886014/activities?access_token=EAA0xhLYp9n4BO4OtzAX6Yy2IaOgQdZAxvcNcmmjaL03zda7fiJG01PjrTlDEmTYXnQz58umZAUYvjPH0LhdqPvlwDcmorQe22BZAUkZAPtcPZC2oJEczMWBOgh8My3kfR713nqNC3rXipgWuy6uvp8jp67Y4ClqT65DjY3pvMXCZAZCUw6uEOIucv0y87rmo8Bp&data=[{"access_token": "EAA0xhLYp9n4BO4OtzAX6Yy2IaOgQdZAxvcNcmmjaL03zda7fiJG01PjrTlDEmTYXnQz58umZAUYvjPH0LhdqPvlwDcmorQe22BZAUkZAPtcPZC2oJEczMWBOgh8My3kfR713nqNC3rXipgWuy6uvp8jp67Y4ClqT65DjY3pvMXCZAZCUw6uEOIucv0y87rmo8Bp","event": "CUSTOM_APP_EVENTS","custom_events": [{"_eventName": "fb_mobile_purchase","_valueToSum": {sub_id_16},"fb_currency": "USD"}],"advertiser_id": "your_advertiser_id","advertiser_tracking_enabled": 1,"application_tracking_enabled": 1,"extinfo": ["mb1"],"event_time":{date:U},"event_source_url":"{_sub_id_13}","user_data":{"external_id": "{subid}","client_ip_address":"{_ip}","client_user_agent":"{_user_agent}","fbc":"fb.1.{date:U}.{_sub_id_10}","fbp":"fb.1.{date:U}.{random:1,9999}"}}]


// const chagtGPTLink = "https://graph.facebook.com/v10.0/%7BAPP_ID%7D/activities?access_token=%7Bsub_id_12%7D&event=CUSTOM_APP_EVENTS&custom_events=[%7B%22_eventName%22:%22fb_mobile_purchase%22,%22_valueToSum%22:%7Bsub_id_16%7D,%22fb_currency%22:%22USD%22%7D]&advertiser_id=%7Bsub_id_11%7D&advertiser_tracking_enabled=1&application_tracking_enabled=1&extinfo=[%22mb1%22]&user_data=%7B%22external_id%22:%22%7Bsubid%7D%22,%22client_ip_address%22:%22%7B_ip%7D%22,%22client_user_agent%22:%22%7B_user_agent%7D%22,%22fbc%22:%22fb.1.%7Bdate:U%7D.%7B_sub_id_10%7D%22,%22fbp%22:%22fb.1.%7Bdate:U%7D.%7Brandom:1,9999%7D%22%7D"