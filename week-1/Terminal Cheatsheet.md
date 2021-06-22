# Terminal functions

### sudo
- makes your command an **admin** command
- eg. sudo apt install (application name)

### pwd
- **p**resent **w**orking **d**irectory 
- lets you know where you are

### mkdir
- **m**a**k**e ***dir***ectory
- mkdir files (makes folder called files)

### ls
- **l**i**s**t
- lists contents of pwd 
- ls -l produces list - long

### cd
- **c**hange **d**irectory
- moves to a directory (cd files, moves to pwd/files)
- cd (no parameter) moves to primary directory
- cd .. moves to parent directory of one you're in

### touch
- makes new file (touch newfile.txt)

### echo 
- makes terminal repeat parameter (echo Hello, World!)
- can be fed into new or existing file (echo Hello, Word! > hello.txt)

### cat
- con**cat**enate
- shows contents of file (cat hello.txt will output 'Hello, World!')

### nano 
- simple command line text editor 
- nano hello.txt

### mv
- **m**o**v**e
- mv hello.txt fakefolder (will move 'hello.txt' into folder called 'fakefolder')
- mv hello.text fakefolder/newname.txt (will move 'hello.txt' into folder called 'fakefolder' and rename it to 'newname.txt')

### cp
- **c**o**p**y
- cp hello.txt goodbye.txt (copies contents of 'hello.txt' into a new file called 'goodbye.txt')

### curl
- **c**lient **url**
- curl (url) opens a file online
- curl -0 (url) opens a file online *and copies it*
- curl -o (name) (url) opens a file online, creates a new file called (name) containing the contents of the online file

### rm 
- **r**e**m**ove
- rm hello.txt (nooo!)
- rm -r fakefolder (removes directory and all its contents)

### rmdir
- rm an empty **dir**ectory
- rmdir emptyfolder 

### exit
- bye!
