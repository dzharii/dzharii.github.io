# Dev. PowerShell random solutions

- 2022-02-24 [powershell - How to get status of "Invoke-Expression", successful or failed? - Stack Overflow](https://stackoverflow.com/questions/32348794/how-to-get-status-of-invoke-expression-successful-or-failed)
> Invoke-Expression will return all the text of the command being invoked.
> But how can I get the system return value of whether this command has been executed successfully or with a failure? In CMD I could use %errorlevel% to get external command execution state. What about PowerShell?

Mathias R. Jessen:
Normally you would use `$?` to inspect the status of the last statement executed:

```
PS C:\> Write-Output 123 | Out-Null; $?
True
PS C:\> Non-ExistingCmdlet 123 | Out-Null; $?
False

```

However, this won't work with `Invoke-Expression`, because even though a statement inside the expression passed to `Invoke-Expression` may fail, the `Invoke-Expression` call it self will have succeeded (ie. the expression, although invalid/non-functional was invoked none the less)

* * * * *

With `Invoke-Expression` you'll have to use try:

```
try {
    Invoke-Expression "Do-ErrorProneAction -Parameter $argument"
} catch {
    # error handling go here, $_ contains the error record
}

```

or a trap:

```
trap {
    # error handling goes here, $_ contains the error record
}
Invoke-Expression "More-ErrorProneActions"

```

* * * * *

The alternative is the append `";$?"` to the expression you want to invoke:

```
$Expr  = "Write-Host $SomeValue"
$Expr += ';$?'

$Success = Invoke-Expression $Expr
if(-not $Success){
    # seems to have failed
}

```
but relies on there not being any pipeline output

- 2022-04-12 [How to Use PowerShell's Grep Select-String](https://adamtheautomator.com/powershell-grep/)
> One of the first Linux commands that many system administrators learn is grep. This venerable tool has been around for decades and is crucial to any administrator’s toolbelt. Grep’s core is simply the ability to search plain text for a RegEx pattern. Grep can search files in a given directory or streamed input to output matches. Did you know PowerShell has grep? Well..almost.
```ps1
Select-String -Path "Users\*.csv" -Pattern "Joe","Marti","Jerry"
```

- 2022-05-21 [Sample of making a simple webserver in PowerShell. If you have more complex needs checkout Pode https://github.com/Badgerati/Pode as a fully fledged PowerShell web server. · GitHub](https://gist.github.com/Tiberriver256/868226421866ccebd2310f1073dd1a1e)


- 2022-05-29 [Base64 Encoder and Decoder Algorithm in PowerShell - with Examples - OpenTechTips](https://opentechtips.com/base64-algorithm-in-powershell-with-examples/)

### Encoder Script

```ps1
function Base64Encode($s) {
$i = 0
$base64 = $ending = ''
$base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

# Add padding if string is not dividable by 3
$pad = 3 - ($s.length % 3)
if ($pad -ne 3) {
        $s += "A" * $pad
        $ending = "=" * $pad
    }
# Iterate though the whole input string
while ($i -lt $s.length) {
    # Take 3 characters at a time, convert them to 4 base64 chars
    $b = 0
    for ($j=0; $j -lt 3; $j++) {

        # get ASCII code of the next character in line
        $ascii = [int][char]$s[$i]
        $i++

        # Concatenate the three characters together
        $b += $ascii -shl 8 * (2-$j)
        }

    # Convert the 3 chars to four Base64 chars
    $base64 += $base64chars[ ($b -shr 18) -band 63 ]
    $base64 += $base64chars[ ($b -shr 12) -band 63 ]
    $base64 += $base64chars[ ($b -shr 6) -band 63 ]
    $base64 += $base64chars[ $b -band 63 ]
    }
# Add the actual padding to the end after removing the same number of characters
if ($pad -ne 3) {
        $base64 = $base64.SubString(0, $base64.length - $pad)
        $base64 += $ending
        }
# Return the Base64 encoded result
return $base64
}
```

### Decoder Script

```ps1
function Base64Decode($s) {
$i = 0
$base64 = $decoded = ''
$base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
# Replace padding with "A" characters for the decoder to work and save the length of the padding to be dropped from the end later
if ($s.substring($s.length - 2,2) -like "==") {
    $s = $s.substring(0, $s.length - 2) + "AA"
    $padd = 2
    }
elseif ($s.substring($s.length - 1,1) -like "=") {
    $s = $s.substring(0, $s.length - 1) + "A"
    $padd = 1
}
# Take 4 characters at a time
while ($i -lt $s.length) {
    $d = 0

    for ($j=0; $j -lt 4; $j++) {
        $d += $base64chars.indexof($s[$i]) -shl (18 - $j * 6)
        $i++
        }
    # Convert the 4 chars back to ASCII
    $decoded += [char](($d -shr 16) -band 255)
    $decoded += [char](($d -shr 8) -band 255)
    $decoded += [char]($d -band 255)
}
# Remove padding
$decoded = $decoded.substring(0, $decoded.length - $padd)
# Return the Base64 encoded result
return $decoded
}
```