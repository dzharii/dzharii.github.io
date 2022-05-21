
## Snippets

- 2022-05-21 [Bash trap for debugging bash scripts](https://www.onlinegdb.com/1h1BpiINv)
```bash
trap 'echo "# $BASH_COMMAND";read' DEBUG
echo line1
echo line2
echo line3
echo "Hello World";
```