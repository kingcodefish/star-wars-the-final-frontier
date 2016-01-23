# JS Style Guide

## Variables
Constant variables should be fully capitalized and not use camel-case, underscores to separate words.
Example: `var THIS_VARIABLE_DOESNT_CHANGE = true;`
Variables should be assigned a value when they are initialized unless there's an issue with looping or something of the like.
Avoid comma delimiting variables over making a new line, unless the case is where a group of variables haven't been defined yet. But again, avoid a scenario like that. On regular variables use lower camel case.
Make self-explanatory variables as often as possible.

## Parentheses Wrapping
Wrap large blocks of code in parentheses, no need for us to endlessly scroll to the section we want when working.

## Commenting
While I don't advise adding dozens of single-line comments to your code to make needless self-explanatory code, I do advise you give some pointers in confusing areas. Always keep a space after the beginning of a comment and make it capitalized, and if it's a multi-line, a space before the ending too.
Multi-line comments with one asterisk should be used for large explanatory definitions.
Multi-line comments with two asterisks should be used for titles of sections to accentuate the area.
Example: `// This is a comment`

## Functions
Functions should always use lower camel-case when being defined and be in function expression form, as that's what KA only allows. There should be no space between the name and parentheses, but a space between the parentheses and curly brackets.
Like so:
```
var imAFunction = function(x, y) {
	// Code Here
};
```

## Objects
Objects should be declared in non-prototype form in most cases. This allows us to truncate it and be easily visible as what it belongs to. If you're extending another object, the prototype form will be needed. e.g., Entity->Player. Objects follow the same style guide as functions, aside from the fact that they should **always** begin with a capital letter, unless of course you're using it for non-function-like purposes.

## Default Functions
Default KA functions should not have `var` at the beginning, as this is suggested by the courses. It also makes it easy to differentiate.

## Loops
Always use for loops, they are just always better, end of story. Never use for...in loops unless you happen to be looping over an object, which would make it required. Using for...in on arrays and the like can give undesired results. Avoid them unless necessary. Loops follow the same style guide as functions.

## Conditions
Conditions follow the same style guide as functions. Conditions always need to have curly brackets. If your condition requires more than two logic operators, you should indent it to keep it clean.
Example:
```
if(mouseX < 200
	&& mouseX > 100
	&& mouseY > 300
	&& mouseY < 400) {
	// Code here
}
```
If you have many if's/else if's/else's that use the same variable with different values, use switch instead. If they use slightly different values, but talk about the same topic (e.g., mosue coordinates), use `switch(true)` Switch cases shouldn't use parentheses, and all lines in the case should be on there own line and indented one tab more.
Example:
```
switch(true) {
	case (mouseX < 200
	&& mouseX > 100
	&& mouseY > 300
	&& mouseY < 400):
		// Code Here
		break;
	case (mouseX < 300
	&& mouseX > 200
	&& mouseY > 300
	&& mouseY < 400):
		// Code here
		break;
}
```

## Invoking
When invoking functions and other predefined things, always separate arguments with a comma and space, like so:
`functionDoesSomething(50, 80, "foo");`
