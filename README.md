# Factory vs Switches

This demo repository meant to demonstrate the differences, when using a
`swtich-case` (or `if-elseif-else`) versus a factory pattern.

In this repo you can see how simple and easy to follow the solution that uses
`switch-case` solution. But also when you compare it with the `factory`
implementaion you can see how rigid is the naive solution. As soon as you need
to add a bit of costumization to the `switch-case` solution you will end up
adding `if` cases one after the other.

Note that I'm not suggesting that all `switch-case` solutions are bad! They are
good upto the point where you don't need any extra costumizations and till there
are just a handfull of options. Its okay to start out with a simple
`switch-case` solution, but as soon as you have customizations or adding the
4th, 5th case coming in, then you should refactor it.

Also worth noting that this is true from the other side as well: the pattern
shown here has a few indirections (e.g. the `proxy-child), that will make it
hard to understand at first glance, specially if you have no experience with it.
So if you have 2-3 cases to cover a switch-case is cleaner and easier to
understand.

The example data for this repo is used from
[dnd5eapi](https://www.dnd5eapi.co/). Nope, I don't play DnD, but really like to
listen to the following two podcasts:
- [Girls Who Don't D&D](http://girlswhodontdnd.com/) and
- [Dungeons and Daddies](https://www.dungeonsanddaddies.com/)
