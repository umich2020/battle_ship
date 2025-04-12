# Specs
## we create a ship class
1. length
2. number of times hit-done
3. sunk:t/f-done
4. location start-done
5. location end-done
5.5 Horizontal-done
6. hit() function that increaese number of hints-done
7. is sunk() function calculates whether it's sunk-done
-unit tests are also done for it and refactored to have closures and getting functions

## gameboard factory
-10x10 board-done
how do we do the tests here? 
-be able to place ships(by calling the ship factory or class)-done
-recieve attack funcition
    -how do we get the correct ship?
-Keep track of missed attacks(probably in array or array in an array)
-be able to report whetger all ships have been sunk-done

## DOM
-Create figma file
-be able to remove and create new items
-new players
    -maybe even start with 5 x 5
    -predetermine coordinates
    -2 ships
    -render boards based on length(that's a sepereate module)
    --no new functions, it should be methods from other objects
-computer
    -should check if the coordinate is legal
-game end
    -if either player has all sunk
FINAL 
-people can place their ship, type coordinate(or maybe click and drag)

Extra credit
-we allow drag and drop
-we still do random computer, or we could not, it would be pretty simple to implement
-load screen is later(welcome screen with start)