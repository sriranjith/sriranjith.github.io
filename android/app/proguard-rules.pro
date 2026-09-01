# Paradox Android app — ProGuard rules
-keepattributes SourceFile,LineNumberTable

# WebView JavaScript interface (none currently, but keep for safety)
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
