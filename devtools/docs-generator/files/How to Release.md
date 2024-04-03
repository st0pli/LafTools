# Steps (Updated on 2024/4/3)

## build and upload the pre-release binary to US machine

1. Trigger 'Manual Build and Upload to US for Pre-Release' on the page [https://github.com/work7z/LafTools/actions/workflows/M-pre-release-build-pkg-to-US.yml](https://github.com/work7z/LafTools/actions/workflows/M-pre-release-build-pkg-to-US.yml)

2. Check if the exit code is ZERO(end normally)

3. Sign in US machine, download these pkg in particular folder (e.g. /home/appuser/PkgRelease-dist/v2.1.30)

4. Download these files, and code signing these binary if possible

5. Uploaded these handled binary to both US machinese and CN COS

# Note

why you put installation files to COS for CN rather than just putting them in server? coz the bandwidth in China is too expensive... I dont' have enough money la.
