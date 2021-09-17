

cd android && ./gradlew bundleRelease -x bundleReleaseJsAndAssets

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res



Step 2: Go to android directory:
cd android
Step 3: Now in this android folder, run this command
./gradlew assembleDebug 

emulator -avd "myavd"



git init
git remote add  origin "link here " 
git branch -M prince

 
git pull origin (branch name )


////////////////// push cmd //////////////

git add.
git commit -m "some msg "
git push origin "Branch name"
