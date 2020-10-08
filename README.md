### One Word Please

🕹️ https://larprad.github.io/one_word_please/

Give a word, get other words.

## Context

Small application developed over 2 weeks at the start of 2020 in order to practice API calls as part of the use of a React JS framework.

## Presentation

The user types a word of their choice (in English) then, depending on the different options checked on the left panel, the application will display words which:

* rhyme
* sound similar
* have the same meaning
* are usually used to describe the chosen word
* are the opposite

![One Word Please 1](https://user-images.githubusercontent.com/59915248/95464518-557f5380-097a-11eb-9f5c-a19ffeefde86.png)
![One Word Please 2](https://user-images.githubusercontent.com/59915248/95464744-98d9c200-097a-11eb-83da-7d53c391bc2d.png)

It is possible to combine several of these options, which mechanically will reduce the number of results. The user can then save displayed words as results. They will be kept for future research.

## Architecture

The application relies on the React framework in particular to ensure that search results are loaded and modified with each new character entry without untimely changes to the DOM.

The [Datamuse API](https://www.datamuse.com/api/) is used to produce the search results.


