composer update
cd frontend
npm run build
cd ..
rm wp-telecommunications-business-act.zip
zip -r wp-telecommunications-business-act.zip ./\
    -x "./frontend/node_modules/*"\
    -x "./.git/*"\