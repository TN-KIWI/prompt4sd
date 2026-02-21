$content = [System.IO.File]::ReadAllText("c:\Users\TKC\Desktop\programing\prompt\r18.html", [System.Text.Encoding]::UTF8)
$readable = $content -replace '>', "`> `n"
[System.IO.File]::WriteAllText("c:\Users\TKC\Desktop\programing\prompt\r18_readable.html", $readable, [System.Text.Encoding]::UTF8)
Write-Output "Done creating r18_readable.html"
