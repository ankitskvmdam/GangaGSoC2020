rm -rf build
mkdir build
cd frontend
npm run build
mv dist/** ../build
cd ../build
echo visit http://localhost:8080
