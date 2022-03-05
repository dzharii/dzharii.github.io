# Dev Random, but interesting stuff


- 2022-03-05 [Perl tricks by Neil Kandalgaonkar](http://montreal.pm.org/tech/neil_kandalgaonkar.shtml)
> A regular expression to check for prime numbers
```perl
perl -wle 'print "Prime" if (1 x shift) !~ /^1?$|^(11+?)\1+$/' [number]
```

```perl
/
  ^1?$   # matches beginning, optional 1, ending.
         # thus matches the empty string and "1".
         # this matches the cases where N was 0 and 1
         # and since it matches, will not flag those as prime.
|   # or...
  ^                # match beginning of string
    (              # begin first stored group
     1             # match a one
      1+?          # then match one or more ones, minimally.
    )              # end storing first group
    \1+            # match the first group, repeated one or more times.
  $                # match end of string.
/x
```



