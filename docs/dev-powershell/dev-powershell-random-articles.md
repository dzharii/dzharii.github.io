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