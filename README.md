# Entry: The agent builds a game from one prompt

`main.ts` copies `POST.json` to the output dir (`MAKEFUN_OUTPUT_DIR`, default `/output`).
`POST.json` must hold the X post's URL (currently a placeholder: replace it after posting the video on X).

Run: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
