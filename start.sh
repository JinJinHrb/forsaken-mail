nohup forever stop ./bin/www & PORT=80 forever start -o nohup.out -e nohup.out ./bin/www && tail -f nohup.out
