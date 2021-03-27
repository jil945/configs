# Setup terminal colors
autoload -U colors && colors
export PS1="%{$fg[cyan]%}%n%{$reset_color%}@%{$fg[green]%}%m:%{$fg[yellow]%}%1~%{$reset_color%}% $ "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad

# Aliases
alias git-pull-all="ls | xargs -I{} git -C {} checkout master && git -C {} pull"
alias pip-uninstall-all="pip freeze | xargs pip uninstall -y"

alias docker-stop="docker stop \$(docker ps -aq)"
alias docker-rm="docker rm \$(docker ps -aq)"
