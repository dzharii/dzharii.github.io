# dev-lua
Date: 2024-11-10

I will think critically and objectively about the problem.



## Learn Lua

2024-11-11 [Lua cheatsheet](https://devhints.io/lua) { devhints.io }

> ![image-20241110234228949](dev-lua.assets/image-20241110234228949.png)

2024-11-11 [Lua Cheat Sheet](https://gist.github.com/doches/2219649) { gist.github.com }

> Updated to Lua 5.4 with the GPT assistance. I am not sure if it works

```lua
-- Lua Cheat Sheet for Programmers, by Al Sweigart http://coffeeghost.net
-- This cheat sheet is an executable Lua program.

--[[
  This is a multiline comment
]]

--[[
  This is a neat trick. The first -- makes -[[ not a multiline comment.
]]
print("This line executes.")
--]] The rest of this line is also a comment.

print("Here is a string" .. ' concatenated with ' .. 2 .. ' other strings.')

-- Note: All number types are doubles. There are no integers.
print(type(42), type(42.0)) -- prints out "number  number"

-- Variables
variable_one = 1 + 2 - 3 -- This will equal zero.
variable_One = "Variables are case sensitive."
negative_twofiftysix = -2^8

-- Multiple assignment and swapping
local a, b = 42, 101
a, b = b, a -- provides a nice value swap trick
local x, y, z = 1, 2, 3, "this value is discarded"

-- nil comparisons
print(previously_unused_variable == nil) -- prints true, all vars start as nil
print(nil == 0 or nil == "") -- prints false, nil is not the same as false or 0
print('The # len operator says there are ' .. #'hello' .. ' letters in "hello".')

-- Boolean operations
some_bool_variable = true and false or true and not false

-- Tables
local a_table = {['spam'] = "Type something in:", ['eggs'] = 10} -- tables are dictionaries/arrays
print(a_table['spam'])

-- User input
local what_the_user_typed_in = io.read()
print('You typed in ' .. what_the_user_typed_in)

-- If statements
if 10 < 20 then
    print("apple" == "orange") -- prints false
    print("apple" ~= "orange") -- true, an apple is not equal to an orange
    local foo = 42
    print(foo)
elif 50 < 100 then
    -- These clauses can contain no lines of code.
end

-- Scoping example
print(foo) -- prints nil, local foo exists only in that "if" block above

-- While loop
local m = 0
while m < 10 do
    print("howdy " .. m)
    m = m + 1 -- there is no m++ or m += 1
    repeat
        print("Repeat loops check the condition at end, and stops if it is true.")
        break -- breaks out of the loop early
    until m == 9999
end

-- For loops
for i = 1, 10 do
    for j = 1, 10, 2 do
        print("for loops add 1 to i and 2 to j each iteration " .. i .. ' ' .. j)
    end
end

-- Functions
local function Greet(name)
    print('Hello ' .. name)
    bar = 100
    return "returns nil if you don't have a return statement."
end
Greet('Al Sweigart')
print(bar) -- prints 100

--[[
Additional Lua Features:
]]

-- 1. Metatables and Metamethods
local myTable = {1, 2, 3}
setmetatable(myTable, {
    __add = function(table1, table2)
        local result = {}
        for i = 1, #table1 do
            result[i] = table1[i] + table2[i]
        end
        return result
    end
})
local anotherTable = {4, 5, 6}
local resultTable = myTable + anotherTable
print(resultTable[1], resultTable[2], resultTable[3]) -- demonstrates metamethods

-- 2. Coroutines
local function foo()
    for i = 1, 10 do
        print("Coroutine iteration: " .. i)
        coroutine.yield() -- pauses the coroutine
    end
end
local co = coroutine.create(foo)
coroutine.resume(co) -- runs until yield
coroutine.resume(co) -- resumes from yield

-- 3. Modules and Packages
-- Modules and packages allow us to separate code into reusable parts.
local myModule = require("myModule")

-- 4. Object-Oriented Programming (OOP) with Lua
local Account = {balance = 0}
function Account:new(o, balance)
    o = o or {}
    setmetatable(o, self)
    self.__index = self
    self.balance = balance or 0
    return o
end
function Account:deposit(amount)
    self.balance = self.balance + amount
end
local myAccount = Account:new(nil, 100)
myAccount:deposit(50)
print(myAccount.balance) -- prints 150

-- 5. Error Handling
local status, err = pcall(function() error("An error occurred") end)
if not status then
    print("Caught error: " .. err)
end

-- 6. File Handling and File I/O
local file = io.open("test.txt", "w")
file:write("Hello World")
file:close()

-- 7. String Manipulation Functions
print(string.find("Hello Lua", "Lua")) -- finds "Lua" in string
print(string.match("I have 2 apples", "%d")) -- finds digits in string

-- 8. Mathematical Functions
print(math.sin(math.pi / 2)) -- prints 1
print(math.floor(3.14)) -- prints 3

-- 9. Standard Library Functions
print(table.concat({"Hello", "Lua"}, " ")) -- concatenates table values with separator

-- 10. Iterators and the `pairs` / `ipairs` functions
for key, value in pairs(a_table) do
    print(key, value)
end

-- 11. Garbage Collection
collectgarbage() -- performs garbage collection

-- 12. Environment Manipulation
print(_G) -- prints global environment table

-- 13. Debug Library
print(debug.traceback()) -- prints a traceback

-- 14. Weak Tables
local weakTable = setmetatable({}, {__mode = "v"}) -- weak reference in values

-- 15. Upvalues and Closures
local function outerFunc()
    local x = 0
    return function()
        x = x + 1
        return x
    end
end
local counter = outerFunc()
print(counter()) -- prints 1
print(counter()) -- prints 2

-- 16. Bitwise Operations
-- Lua 5.3 introduced bitwise operators like &, |, ~, <<, >>
local bitwise_and = 5 & 3 -- performs bitwise AND, result is 1
local bitwise_or = 5 | 3 -- performs bitwise OR, result is 7
local bitwise_not = ~5 -- performs bitwise NOT, result is -6
local bitwise_shift_left = 5 << 1 -- result is 10
local bitwise_shift_right = 5 >> 1 -- result is 2
print(bitwise_and, bitwise_or, bitwise_not, bitwise_shift_left, bitwise_shift_right)

-- 17. Finer Control of Scope (do blocks)
do
    local scoped_var = 42
    print(scoped_var) -- prints 42
end
-- print(scoped_var) -- would cause an error, scoped_var is not defined here

-- 18. Custom Iterators
function custom_iterator(max_count)
    local count = 0
    return function()
        count = count + 1
        if count <= max_count then
            return count
        end
    end
end
for value in custom_iterator(5) do
    print(value) -- prints values from 1 to 5
end

-- 19. Pattern Matching with string.gsub
local str = "I have 2 apples and 3 oranges."
local result_str = string.gsub(str, "%d+", "<number>") -- replaces all digits with '<number>'
print(result_str) -- prints: I have <number> apples and <number> oranges.

-- 20. Tables as Sets
local setA = {1, 2, 3}
local setB = {3, 4, 5}
local union = {}
local intersection = {}

-- Union operation
for _, v in ipairs(setA) do union[v] = true end
for _, v in ipairs(setB) do union[v] = true end
print("Union:")
for k in pairs(union) do print(k) end

-- Intersection operation
for _, v in ipairs(setA) do intersection[v] = false end
for _, v in ipairs(setB) do
    if intersection[v] == false then
        intersection[v] = true
    end
end
print("Intersection:")
for k, v in pairs(intersection) do
    if v == true then
        print(k)
    end
end

-- 21. Command Line Arguments
-- The 'arg' table stores command line arguments passed to the script
for i, v in ipairs(arg) do
    print("Argument " .. i .. ": " .. v)
end

```

2024-11-11 [Awesome Lua Cheat Sheet · GitHub](https://gist.github.com/JettIsOnTheNet/b7472ee8b1f5b324c498302b0f61957d) {gist.github.com}

> ![image-20241111000353791](dev-lua.assets/image-20241111000353791.png)

2024-11-11 [Learn Lua: Introduction to Lua Cheatsheet | Codecademy](https://www.codecademy.com/learn/learn-lua/modules/learn-lua-introduction/cheatsheet) { www.codecademy.com }

> ![image-20241111000550931](dev-lua.assets/image-20241111000550931.png)



## Projects 💖 Lua

Here’s a categorized list of the Lua-based projects, organized by their primary application domain. This organization provides better context and relevance:

------

### Text Editors and IDEs

1. **[Neovim](https://neovim.io/)**: A hyperextensible Vim-based text editor using Lua for configuration and plugin development.
   - Repository: [GitHub - neovim/neovim](https://github.com/neovim/neovim)
2. **[ZeroBrane Studio](https://studio.zerobrane.com/)**: A lightweight Lua IDE with debugging support for quick development cycles.
   - Repository: [GitHub - pkulchenko/ZeroBraneStudio](https://github.com/pkulchenko/ZeroBraneStudio)
3. **[MobDebug](https://studio.zerobrane.com/debugging)**: A remote debugger for Lua integrated into various Lua environments.
   - Repository: [GitHub - pkulchenko/MobDebug](https://github.com/pkulchenko/MobDebug)

------

### Networking and Web Development

1. **[Wireshark](https://www.wireshark.org/)**: A network protocol analyzer supporting Lua for custom dissectors and plugins.
   - Repository: [GitLab - Wireshark](https://gitlab.com/wireshark/wireshark)
2. **[Nmap](https://nmap.org/)**: Lua-powered Nmap Scripting Engine (NSE) enables advanced network discovery and security tasks.
   - Repository: [GitHub - nmap/nmap](https://github.com/nmap/nmap)
3. **[OpenResty](https://openresty.org/)**: A full-fledged web application server bundling Nginx and LuaJIT.
   - Repository: [GitHub - openresty/openresty](https://github.com/openresty/openresty)
4. **[Kong](https://konghq.com/)**: An open-source API gateway leveraging Lua for plugin development and request handling.
   - Repository: [GitHub - Kong/kong](https://github.com/Kong/kong)
5. **[Lapis](https://leafo.net/lapis/)**: A Lua-based web framework running inside OpenResty for creating performant web applications.
   - Repository: [GitHub - leafo/lapis](https://github.com/leafo/lapis)
6. **[Apache Traffic Server](https://trafficserver.apache.org/)**: A high-performance web proxy cache with Lua-based plugins for customization.
   - Repository: [GitHub - apache/trafficserver](https://github.com/apache/trafficserver)
7. **[LuCI](https://openwrt.org/docs/guide-user/luci/luci.essentials)**: A web-based configuration interface for OpenWrt routers, built entirely with Lua.
   - Repository: [GitHub - openwrt/luci](https://github.com/openwrt/luci)

------

### Game Development and Modding

1. **[LÖVE](https://love2d.org/)**: A framework for creating 2D games in Lua.
   - Repository: [GitHub - love2d/love](https://github.com/love2d/love)
2. **[Minetest](https://www.minetest.net/)**: A voxel game engine using Lua for modding custom game content.
   - Repository: [GitHub - minetest/minetest](https://github.com/minetest/minetest)
3. **[Defold](https://defold.com/)**: A cross-platform game engine using Lua for scripting game logic.
   - Repository: [GitHub - defold/defold](https://github.com/defold/defold)
4. **[Hedgewars](https://hedgewars.org/)**: A Worms-like strategy game using Lua for scripting missions and AI.
   - Repository: [GitHub - hedgewars/hw](https://github.com/hedgewars/hw)
5. **[Cocos2d-x](https://www.cocos.com/en)**: A game development framework with Lua bindings for cross-platform game logic.
   - Repository: [GitHub - cocos2d/cocos2d-x](https://github.com/cocos2d/cocos2d-x)
6. **[The Powder Toy](https://powdertoy.co.uk/)**: A free physics sandbox game using Lua for modding custom elements and simulations.
   - Repository: [GitHub - The-Powder-Toy/The-Powder-Toy](https://github.com/The-Powder-Toy/The-Powder-Toy)
7. **[Windower](https://github.com/Windower/Lua)**: A Final Fantasy XI tool that enables Lua scripting for custom plugins and game enhancements.
   - Repository: [GitHub - Windower/Lua](https://github.com/Windower/Lua)

------

### Text

1. **[Pandoc](https://pandoc.org/)**: A universal document converter with Lua filters for AST manipulation.
   - Repository: [GitHub - jgm/pandoc](https://github.com/jgm/pandoc)

------

### Operating Systems and Window Managers

1. **[AwesomeWM](https://awesomewm.org/)**: A highly configurable window manager for X using Lua for scripting.
   - Repository: [GitHub - awesomeWM/awesome](https://github.com/awesomeWM/awesome)
2. **[OpenTX](https://www.open-tx.org/)**: Open-source firmware for RC radio transmitters using Lua for custom functions.
   - Repository: [GitHub - opentx/opentx](https://github.com/opentx/opentx)

------

### Database and Backend Tools

1. **[Tarantool](https://tarantool.io/)**: An in-memory database and application server using Lua for stored procedures.
   - Repository: [GitHub - tarantool/tarantool](https://github.com/tarantool/tarantool)

------

### Media and Graphics

1. **[mpv](https://mpv.io/)**: A media player supporting Lua scripting for automation and IPC.
   - Repository: [GitHub - mpv-player/mpv](https://github.com/mpv-player/mpv)
2. **[Darktable](https://www.darktable.org/)**: An open-source photography workflow application supporting Lua scripting for task automation.
   - Repository: [GitHub - darktable-org/darktable](https://github.com/darktable-org/darktable)

------

### Networking and Packet Processing

1. **[Snabb](https://snabb.co/)**: A high-performance networking toolkit using LuaJIT for processing network packets.
   - Repository: [GitHub - snabbco/snabb](https://github.com/snabbco/snabb)

------

### Programming Tools and Extensions

1. **[Premake](https://premake.github.io/)**: A build configuration tool using Lua scripts to generate project files for multiple platforms.
   - Repository: [GitHub - premake/premake-core](https://github.com/premake/premake-core)
2. **[Flow](https://flowtype.org/)**: Lua-based projects like TypeScriptToLua compile TypeScript to Lua for static typing benefits.
   - Repository: [GitHub - TypeScriptToLua/TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua)
3. **[Ravi](https://github.com/dibyendumajumdar/ravi)**: A Lua derivative with optional static typing and JIT compilation for enhanced performance.
   - Repository: [GitHub - dibyendumajumdar/ravi](https://github.com/dibyendumajumdar/ravi)

------

### Automation and Workflow Tools

1. **[Hammerspoon](https://www.hammerspoon.org/)**: A macOS tool using Lua scripting for automating workflows and OS integration.
   - Repository: [GitHub - Hammerspoon/hammerspoon](https://github.com/Hammerspoon/hammerspoon)
2. **[SILE](https://sile-typesetter.org/)**: A TeX-inspired typesetting system using Lua for configuration and custom extensions.
   - Repository: [GitHub - sile-typesetter/sile](https://github.com/sile-typesetter/sile)

### Community and Modular Extensions

1. **[AwesomeWM Widgets](https://awesomewm.org/)**: Community-driven widgets and extensions for Awesome Window Manager, all scripted in Lua.
   - Repository: [GitHub - streetturtle/awesome-wm-widgets](https://github.com/streetturtle/awesome-wm-widgets)
2. **[Eluna](https://github.com/ElunaLuaEngine/Eluna)**: A Lua engine for World of Warcraft emulators, allowing custom scripting for mechanics and events.
   - Repository: [GitHub - ElunaLuaEngine/Eluna](https://github.com/ElunaLuaEngine/Eluna)
3. **[Mushclient](https://www.gammon.com.au/mushclient)**: A MUD client supporting Lua scripting for automating gameplay and custom behaviors.
   - Repository: [GitHub - nickgammon/MUSHclient](https://github.com/nickgammon/MUSHclient)
4. **[mpv Socket Control](https://mpv.io/manual/master/#json-ipc)**: Enables Lua-based remote control and IPC scripting for the mpv media player.
   - Repository: [GitHub - mpv-player/mpv](https://github.com/mpv-player/mpv)

------

### 3D Applications

1. **[Crown Engine](https://crownengine.org/)**: A high-performance game engine using Lua for scripting real-time applications.
   - Repository: [GitHub - dbartolini/crown](https://github.com/dbartolini/crown)

------

