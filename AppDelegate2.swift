// From Universal Linking In iOS [Complete Guide]: https://medium.com/@deyuttamkumar786/a-beginner-guide-to-universal-linking-dfb00f3a9af7

private func application(application: UIApplication, continueUserActivity userActivity: NSUserActivity, restorationHandler: ([AnyObject]?) -> Void) -> Bool {
    if userActivity.activityType == NSUserActivityTypeBrowsingWeb {
        // Your handle links code here :D
        return true
    }
    return false
}


if let appURL = URL(string: "https://myphotoapp.example.com/albums?albumname=vacation&index=1") {
    UIApplication.shared.open(appURL) { success in
        if success {
            print("The URL was delivered successfully.")
        } else {
            print("The URL failed to open.")
        }
    }
} else {
    print("Invalid URL specified.")

}


// From apple: https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app

func application(_ application: UIApplication,
                 continue userActivity: NSUserActivity,
                 restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool
{
    // Get URL components from the incoming user activity.
    guard userActivity.activityType == NSUserActivityTypeBrowsingWeb,
        let incomingURL = userActivity.webpageURL,
        let components = NSURLComponents(url: incomingURL, resolvingAgainstBaseURL: true) else {
        return false
    }


    // // Check for specific URL components that you need.
    // guard let path = components.path, // we are currently not using components
    // let params = components.queryItems else {
    //     return false
    // }    
    // print("path = \(path)")


    // if let albumName = params.first(where: { $0.name == "albumname" } )?.value,
    //     let photoIndex = params.first(where: { $0.name == "index" })?.value {


    //     print("album = \(albumName)")
    //     print("photoIndex = \(photoIndex)")
    //     return true


    // } else {
    //     print("Either album name or photo index missing")
    //     return false
    // }
}




//from How to set up Universal Links on iOS for deep linking: https://adapty.io/blog/ios-universal-links/

func application(_ application: UIApplication,

                 continue userActivity: NSUserActivity,

                 restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {

    if userActivity.activityType == NSUserActivityTypeBrowsingWeb,

       let url = userActivity.webpageURL {

        // Handle the URL and open the corresponding content

    }

    return true

}


//from HOW TO SET UP UNIVERSAL LINKS FOR IOS AND ANDROID?: https://www.axon.dev/blog/how-to-set-up-universal-links-for-ios-and-android

func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        // Handle universal links when the app is already running or in the background

        guard userActivity.activityType == NSUserActivityTypeBrowsingWeb,
          let url = userActivity.webpageURL else {
             return false // Return false if the user activity is not a web browsing activity
        }
 
        handleUniversalLink(url: url)

        return true
    }