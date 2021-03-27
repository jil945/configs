# Colorful editor
export PS1="\[\033[36m\]\u\[\033[m\]@\[\033[32m\]\h:\[\033[33;1m\]\W\[\033[m\]\$ "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad

# Aliases
alias git-pull-all="ls | xargs -I{} git -C {} checkout master && git -C {} pull"
alias pip-uninstall-all="pip freeze | xargs pip uninstall -y"

alias docker-stop="docker stop \$(docker ps -aq)"
alias docker-rm="docker rm \$(docker ps -aq)"
