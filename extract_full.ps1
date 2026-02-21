$filePath = "c:\Users\TKC\Desktop\programing\prompt\r18.html"
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

# Regex to find h2, h4, and tables
$matches = [regex]::Matches($content, '<(h2|h4|table)[^>]*>(.*?)<\/\1>', [System.Text.RegularExpressions.RegexOptions]::Singleline)

$currentH2 = "Unknown"
$currentH4 = "Default"

foreach ($m in $matches) {
    $tag = $m.Groups[1].Value
    $val = $m.Groups[2].Value -replace '<[^>]+>', ''
    $val = $val.Trim()

    if ($tag -eq "h2") {
        if ($val -eq "目次") { continue }
        $currentH2 = $val
        $currentH4 = "基本一覧"
        Write-Output "H2: $currentH2"
    }
    elseif ($tag -eq "h4") {
        $currentH4 = $val
        Write-Output "H4: $currentH4"
    }
    elseif ($tag -eq "table") {
        $tableHtml = $m.Groups[2].Value
        $rowMatches = [regex]::Matches($tableHtml, '<tr>(.*?)</tr>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
        foreach ($rm in $rowMatches) {
            $cellMatches = [regex]::Matches($rm.Groups[1].Value, '<td[^>]*>(.*?)</td>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
            if ($cellMatches.Count -ge 2) {
                $nameJa = $cellMatches[0].Groups[1].Value -replace '<br\s*/?>', ', ' -replace '<[^>]+>', ''
                $tagVal = $cellMatches[1].Groups[1].Value -replace '<br\s*/?>', ', ' -replace '<[^>]+>', ''
                $nameJa = $nameJa.Trim()
                $tagVal = $tagVal.Trim()
                if ($nameJa -ne "日本語" -and $nameJa -ne "詳細") {
                    Write-Output "TAG: $nameJa | $tagVal"
                }
            }
        }
    }
}
