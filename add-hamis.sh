#!/usr/bin/env bash
WHERE_TO=$1
NAME=$2
DESC=$3
CREDIT=$4
WHICH=$5

ORIG_CONTENT=$(<"$WHERE_TO")

DIR_HAMIS_LIST=$(dirname "$(realpath "$WHERE_TO")")/hamikset
echo "Hamikset in: $DIR_HAMIS_LIST"
mkdir -pv "$DIR_HAMIS_LIST"

HAMIS_ID=$(openssl rand -hex 8)

NEW_FILENAME_PNG=$HAMIS_ID.png
NEW_FILENAME_GIF=$HAMIS_ID.gif

convert "${WHICH}[0]" "$DIR_HAMIS_LIST/$NEW_FILENAME_PNG"
convert "$WHICH" "$DIR_HAMIS_LIST/$NEW_FILENAME_GIF"

NEW_CONTENT=$(echo "$ORIG_CONTENT" | jq \
  --arg id "$HAMIS_ID" --arg name "$NAME" \
  --arg pp "hamikset/$NEW_FILENAME_PNG" \
  --arg pg "hamikset/$NEW_FILENAME_GIF" \
  --arg desc "$DESC" \
  --arg credit "$CREDIT" \
  '. += [{id: $id, name: $name, permalinkPng: $pp, permalinkGif: $pg, description: $desc, credit: $credit}]')
echo "$NEW_CONTENT" > "$WHERE_TO"
