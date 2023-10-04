TAG="v$1"

echo "Release xdump $1"

git tag -a $TAG -m "Release, $TAG"
git push --tags

echo "Created tag $TAG"

id=$(curl -Ls \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/mgred/xdump/releases \
  -d '{"tag_name":"'$TAG'","target_commitish":"main","name":"'$TAG'","body":"xdump '$TAG'","draft":false,"prerelease":false,"generate_release_notes":false}' \
  | jq ".id")

echo "Created Github Release $id"

asset_url=$(curl -Ls \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  -H "Content-Type: application/octet-stream" \
  "https://uploads.github.com/repos/mgred/xdump/releases/$id/assets?name=xdump-$1.tar" \
  --data-binary "@xdump.tar" \
  | jq ".browser_download_url")

echo "Updated Github Release"

echo $asset_url
