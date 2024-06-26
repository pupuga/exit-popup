let dataExitPopup = {
    "code": "CHIIDA5",
    "time": "00:59",
    "memoryDays": "365",
    "memoryCloseDays": "30",
    "mobileLoadSec": "2",
    "desktopLoadSec": "90",
    "minimizeCount": "1",
    "minimizeHide": "1",
    "style": {
        "borderRadius": "11",
        "backgroundColor": "#ffffff",
        "getFontFamily": "1",
        "timerTitleFontColor": "#000000",
        "timerFontColor" : "#000000",
        "timerDigitColor": "#ffffff",
        "timerDigitBackgroundColor" : "#D6B981",
        "timerAnalogPointColor": "#000000",
        "codeTitleFontColor": "#000000",
        "codeFontColor": "#000000",
        "codeCodeFontColor": "#000000",
        "codeCodeFontColorSecond": "#737373",
        "helpFontColor": "#979797",
        "closeButtonColor": "#979797",
        "minimizeButtonColor": "#ffffff",
        "minimizeButtonBackgroundColor" : "#D6B981"
    },
    "timerImage": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ItCh0LvQvtC5XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTMuOCA0OTYuMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEzLjggNDk2LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cjwvc3R5bGU+CjxnPgoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNTcuOTkwOSIgeTE9IjEzNi43NTg5IiB4Mj0iMjU3Ljk5MDkiIHkyPSI0NDkuOTczNiI+CgkJPHN0b3AgIG9mZnNldD0iMC4yMzMyIiBzdHlsZT0ic3RvcC1jb2xvcjojRjI4QjYyIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0RGMzU0MCIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNDcwLjMsMTI2LjYgNDU3LjYsMTI2LjYgNDU3LjYsMTI2LjIgNTksMTI2LjIgNTgsMTI2LjYgNDUuNywxMjYuNiA0NS43LDE3OC4yIDU5LDE3OC4yIDU5LDQ1Mi4yIAoJCTQ1OS42LDQ1Mi4yIDQ1OS42LDE3OC4yIDQ3MC4zLDE3OC4yIAkiLz4KCTxwYXRoIGQ9Ik00OTIsMTA3aC03Mi42YzExLjQtMTAuMiwxNy45LTI0LjgsMTcuOS00MC4xYzAtMjYtMjEtNDctNDctNDdjLTcuMywwLTE0LjYsMS43LTIxLjEsNWwtNzMuMywzNi45CgkJYy01LjQtNC4yLTEyLTYuNS0xOC45LTYuNWgtMzZjLTYuOCwwLTEzLjUsMi4zLTE4LjksNi41bC03My40LTM2LjljLTIzLjItMTEuNy01MS40LTIuMy02My4xLDIwLjljLTMuMyw2LjYtNSwxMy44LTUsMjEuMQoJCWMwLDE1LjMsNi41LDI5LjksMTcuOSw0MC4xSDI1YzAuMSwwLDAsMTAuMywwLDIzdjM1LjNjMCwxMi43LDAuMSwyMywwLDIzaDEzLjh2Mjc3LjNjMCwzLjksMy4xLDcsNyw3aDQyNi4zYzMuOSwwLDctMy4xLDctN1YxODguMwoJCUg0OTFjMC0wLjIsMC0yMi43LDAtMjNWMTA3QzQ5MSwxMDcsNTA0LjcsMTA3LDQ5MiwxMDd6IE0zNzUuNSwzNy40YzE2LjMtOC4yLDM2LjEtMS42LDQ0LjMsMTQuNmMyLjMsNC42LDMuNSw5LjcsMy41LDE0LjgKCQljMCwyMi4xLTE4LDQwLjEtNDAuMSw0MC4xSDMwOHYtMS4ybDc1LjEtMjMuOGMzLjctMSw1LjktNC45LDQuOC04LjZjLTEtMy43LTQuOS01LjktOC42LTQuOGMtMC4xLDAtMC4zLDAuMS0wLjQsMC4xTDMwOCw5MS4xCgkJYzAuNC02LjItMC43LTEyLjUtMy4xLTE4LjJMMzc1LjUsMzcuNHogTTI3Nyw2OS4zYzkuMywwLjIsMTYuOCw3LjcsMTcsMTdWMTA3aC03MFY4Ni4zYzAuMi05LjMsNy43LTE2LjgsMTctMTdIMjc3eiBNOTQuNyw2Ni44CgkJYzAtMTguMiwxNC43LTMzLDMyLjktMzNjNS4yLDAsMTAuMywxLjIsMTUsMy41bDcwLjYsMzUuNWMtMi40LDUuOC0zLjUsMTItMy4xLDE4LjJsLTcwLjktMjIuNWMtMy43LTEuMi03LjYsMC43LTguOSw0LjQKCQljLTEuMiwzLjcsMC43LDcuNiw0LjQsOC45YzAuMSwwLDAuMiwwLjEsMC4zLDAuMWw3NS4xLDIzLjh2MS4yaC03NS4yQzExMi42LDEwNi45LDk0LjcsODksOTQuNyw2Ni44eiBNMzksMTIwLjdsMTcxLDAuMnY1My4zCgkJbC0xNzEuMS0wLjEgTTUyLjgsMTg4LjNIMjEwdjI3MC4zSDUyLjhWMTg4LjN6IE0yMjQsMTIxaDcwdjMzNy43aC03MFYxMjF6IE00NjUuMiw0NTguNkgzMDhWMTg4LjNoMTU3LjJWNDU4LjZ6IE00NzYuNiwxNzQuNgoJCUwzMDgsMTc0LjNWMTIxaDE4NGMwLDAtMTUsMC0xNSwwIi8+CjwvZz4KPC9zdmc+Cg==",
    "timerImageExt": "svg+xml",
    "codeImage": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ItCh0LvQvtC5XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDI4IDU3NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAyOCA1Nzc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qye2ZpbGw6bm9uZTt9Cgkuc3Qze2ZpbGw6dXJsKCNTVkdJRF8yXyk7fQoJLnN0NHtmaWxsOnVybCgjU1ZHSURfM18pO30KCS5zdDV7ZmlsbDp1cmwoI1NWR0lEXzRfKTt9Cjwvc3R5bGU+CjxnPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1MjAuMTUiIHkxPSIyNzUuMzQ5MyIgeDI9IjUyMC4xNSIgeTI9Ii0zMC44MTg4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTA0KSI+CgkJPHN0b3AgIG9mZnNldD0iMC4yMzMyIiBzdHlsZT0ic3RvcC1jb2xvcjojRjI4QjYyIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0RGMzU0MCIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjMxNSwyNjkuMSAzMTUsNTM3IDcxNS42LDUzNyA3MTUuNiwyNjkuMSA3MjYuMywyNjkuMSA3MjYuMywyMTguNyA3MTMuNiwyMTguNyA3MTMuNiwyMTguNCAKCQkzMTUsMjE4LjQgMzE0LDIxOC43IAkiLz4KCTxnPgoJCTxwYXRoIGQ9Ik03MjEuNiw1NDIuNEg1NjQuNVYyMTMuM2gtMTR2MzI5LjFoLTcwVjIxMy4zaC0xNHYzMjkuMUgzMDkuM1YyMTMuM2gtMTR2MzM2LjFjMCwzLjksMy4xLDcsNyw3aDQyNi4zYzMuOSwwLDctMy4xLDctNwoJCQlWMjEzLjNoLTE0VjU0Mi40eiIvPgoJCTxwb2x5Z29uIHBvaW50cz0iNzM2LDE5OS4xIDI5NCwxOTkuMSAyOTQsMjEzLjMgMjk1LjMsMjEzLjMgMzA5LjMsMjEzLjMgNDY2LjUsMjEzLjMgNDgwLjUsMjEzLjMgNTUwLjUsMjEzLjMgNTY0LjUsMjEzLjMgCgkJCTcyMS42LDIxMy4zIDczNS42LDIxMy4zIDczNiwyMTMuMyA3MzYsMjA5LjEgNzM2LDIwOCAJCSIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZD0iTTc0OC41LDEwNC43aC0xbDAsMEM3NDguMSwxMDQuNyw3NDguNSwxMDQuNyw3NDguNSwxMDQuN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOTQ0LjYsNDQ1YzE1LjIsMiwzMC41LTIuNiw0Mi4xLTEyLjVjMTkuNy0xNi45LDIyLTQ2LjYsNS4xLTY2LjNjLTQuOC01LjYtMTAuOC05LjktMTcuNi0xMi44bC03NS44LTMxLjYKCQkJYy0wLjMtNi44LTIuOS0xMy4zLTcuNC0xOC41TDg2Ny42LDI3NmMtNC40LTUuMi0xMC41LTguNy0xNy4yLTEwLjFsLTE5LjgtNzkuN2MtNi4yLTI1LjItMzEuNy00MC42LTU2LjktMzQuMwoJCQljLTcuMSwxLjgtMTMuNyw1LjItMTkuMyw5LjljLTExLjYsMTAtMTguNCwyNC40LTE4LjgsMzkuN2wtNDcuOS01NS45YzAuMSwwLjEtNy44LDYuNy0xNy41LDE1bC0yNi44LDIzCgkJCWMtNy44LDYuNy0xNC4zLDEyLjQtMTYuNiwxNC4zbDExMy45LDEzMi44bC0wLjQsMC4zbDkxLjgsMTA3bDAuNC0wLjNsOTcuNiwxMTMuOGMzLjQtMi45LDE2LjUtMTQuMSwxNi42LTE0LjNsMzMuNi0yOC45CgkJCWMtMi4yLTIuNS05LjEtMTAuNi05LjEtMTAuNmwtNDAuOSwzNC42bC04OC4xLTEwMy4xbDAuMS0wLjFMODIwLjgsNDA0bDQwLjQtMzQuN2wxMTkuMSwxMzguOWwxMC42LTkuMSIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04MzMsMjgzLjJjNy4yLTUuOSwxNy44LTUuMSwyNCwxLjhsMjMuNCwyNy4zYzUuOSw3LjIsNS4xLDE3LjgtMS44LDI0bC0xNS43LDEzLjVsLTQ1LjYtNTMuMUw4MzMsMjgzLjJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTc2My42LDE3Mi40YzEzLjgtMTEuOSwzNC42LTEwLjMsNDYuNSwzLjRjMy40LDMuOSw1LjgsOC42LDcsMTMuN2wxOSw3Ni43Yy01LjksMS45LTExLjQsNS4yLTE1LjgsOS41CgkJCWwtMjkuMS02OC40Yy0xLjQtMy42LTUuNS01LjMtOS4xLTMuOXMtNS4zLDUuNS0zLjksOS4xYzAsMC4xLDAuMSwwLjIsMC4xLDAuM2wzMC44LDcyLjVsLTAuOSwwLjhsLTQ5LTU3LjEKCQkJQzc0NC45LDIxMi4xLDc0Ni44LDE4Ni44LDc2My42LDE3Mi40eiIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNjQ1LjgsMTk5LjkgNjg2LjUsMTY1LjIgNzk3LjYsMjk1LjEgNzU3LjIsMzI5LjggNzUwLjcsMzIyLjIgNzUwLjYsMzIyLjMgCQkiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjgxOS44LDQwMi45IDg2MC41LDM2OC4yIDk3MS42LDQ5OC4xIDkzMS4yLDUzMi44IDkyNC43LDUyNS4yIDkyNC42LDUyNS4zIAkJIi8+CgkJCgkJCTxyZWN0IHg9Ijc4Mi43IiB5PSIzMTQuNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC43NTkgLTAuNjUxMSAwLjY1MTEgMC43NTkgLTMyLjU3OCA2MTEuMjMyMSkiIGNsYXNzPSJzdDEiIHdpZHRoPSI1My4zIiBoZWlnaHQ9IjcwIi8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTkyMSw0MTcuNWwtNDktNTcuMWwwLjktMC44bDY3LDQxLjVjMy4yLDIuMSw3LjYsMS4zLDkuNy0xLjljMi4xLTMuMiwxLjMtNy42LTEuOS05LjcKCQkJYy0wLjEtMC4xLTAuMy0wLjItMC40LTAuMmwtNjMuMi0zOS4yYzUtMy44LDktOC42LDExLjgtMTQuMmw3Mi45LDMwLjVjMTYuOCw3LDI0LjgsMjYuNCwxNy43LDQzLjJjLTIsNC44LTUuMSw5LTksMTIuMwoJCQlDOTYwLjgsNDM2LjIsOTM1LjUsNDM0LjMsOTIxLDQxNy41eiIvPgoJPC9nPgoJPHBhdGggZD0iTTk0NC42LDQ0NWMxNS4yLDIsMzAuNS0yLjYsNDIuMS0xMi41YzE5LjctMTYuOSwyMi00Ni42LDUuMS02Ni4zYy00LjgtNS42LTEwLjgtOS45LTE3LjYtMTIuOGwtNzUuOC0zMS42CgkJYy0wLjMtNi44LTIuOS0xMy4zLTcuNC0xOC41TDg2Ny42LDI3NmMtNC40LTUuMi0xMC41LTguNy0xNy4yLTEwLjFsLTE5LjgtNzkuN2MtNi4yLTI1LjItMzEuNy00MC42LTU2LjktMzQuMwoJCWMtNy4xLDEuOC0xMy43LDUuMi0xOS4zLDkuOWMtMTEuNiwxMC0xOC40LDI0LjQtMTguOCwzOS43bC00Ny45LTU1LjljMC4xLDAuMS03LjgsNi43LTE3LjUsMTVsLTI2LjgsMjMKCQljLTcuOCw2LjctMTQuMywxMi40LTE2LjYsMTQuM2wxMTMuOSwxMzIuOGwtMC40LDAuM2w5MS44LDEwN2wwLjQtMC4zbDk3LjYsMTEzLjhjMy40LTIuOSwxNi41LTE0LjEsMTYuNi0xNC4zbDMzLjYtMjguOQoJCWMtMi4yLTIuNS05LjEtMTAuNi05LjEtMTAuNmwtNDAuOSwzNC42bC04OC4xLTEwMy4xbDAuMS0wLjFMODIwLjgsNDA0bDQwLjQtMzQuN2wxMTkuMSwxMzguOWwxMC42LTkuMSBNODMzLDI4My4yCgkJYzcuMi01LjksMTcuOC01LjEsMjQsMS44bDIzLjQsMjcuM2M1LjksNy4yLDUuMSwxNy44LTEuOCwyNGwtMTUuNywxMy41bC00NS42LTUzLjFMODMzLDI4My4yeiBNNzYzLjYsMTcyLjQKCQljMTMuOC0xMS45LDM0LjYtMTAuMyw0Ni41LDMuNGMzLjQsMy45LDUuOCw4LjYsNywxMy43bDE5LDc2LjdjLTUuOSwxLjktMTEuNCw1LjItMTUuOCw5LjVsLTI5LjEtNjguNGMtMS40LTMuNi01LjUtNS4zLTkuMS0zLjkKCQlzLTUuMyw1LjUtMy45LDkuMWMwLDAuMSwwLjEsMC4yLDAuMSwwLjNsMzAuOCw3Mi41bC0wLjksMC44bC00OS01Ny4xQzc0NC45LDIxMi4xLDc0Ni44LDE4Ni44LDc2My42LDE3Mi40eiBNNjQ1LjgsMTk5LjkKCQlsNDAuNy0zNC43bDExMS4xLDEzMGwtNDAuNCwzNC43bC02LjUtNy42aC0wLjFMNjQ1LjgsMTk5Ljl6IE03NjYuMywzNDAuNGw0MC40LTM0LjdsNDUuNiw1My4xbC00MC40LDM0LjdMNzY2LjMsMzQwLjR6IE05MjEsNDE3LjUKCQlsLTQ5LTU3LjFsMC45LTAuOGw2Nyw0MS41YzMuMiwyLjEsNy42LDEuMyw5LjctMS45YzIuMS0zLjIsMS4zLTcuNi0xLjktOS43Yy0wLjEtMC4xLTAuMy0wLjItMC40LTAuMmwtNjMuMi0zOS4yCgkJYzUtMy44LDktOC42LDExLjgtMTQuMmw3Mi45LDMwLjVjMTYuOCw3LDI0LjgsMjYuNCwxNy43LDQzLjJjLTIsNC44LTUuMSw5LTksMTIuM0M5NjAuOCw0MzYuMiw5MzUuNSw0MzQuMyw5MjEsNDE3LjV6Ii8+Cgk8cmVjdCB4PSIzMDkuMyIgeT0iMjEzLjMiIGNsYXNzPSJzdDIiIHdpZHRoPSIxNTcuMiIgaGVpZ2h0PSIzMjkuMSIvPgoJPHJlY3QgeD0iNDgwLjUiIHk9IjIxMy4zIiBjbGFzcz0ic3QyIiB3aWR0aD0iNzAiIGhlaWdodD0iMzI5LjEiLz4KCTxyZWN0IHg9IjU2NC41IiB5PSIyMTMuMyIgY2xhc3M9InN0MiIgd2lkdGg9IjE1Ny4yIiBoZWlnaHQ9IjMyOS4xIi8+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUxMi41IiB5MT0iNDc5LjY3NzQiIHgyPSI1MTIuNSIgeTI9IjM4MC43MDUxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTA0KSI+CgkJPHN0b3AgIG9mZnNldD0iMC4yMzMyIiBzdHlsZT0ic3RvcC1jb2xvcjojRjI4QjYyIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0RGMzU0MCIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxyZWN0IHg9IjUwNSIgeT0iMjEiIGNsYXNzPSJzdDMiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxMDMiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjE3LjU1NDIiIHkxPSIzMDIuMjk2OSIgeDI9IjYxNy41NTQyIiB5Mj0iMjAzLjMyNDUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC44NjYgMC41IDAuNSAtMC44NjYgLTY3LjM2NjEgNC43OTgpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwLjIzMzIiIHN0eWxlPSJzdG9wLWNvbG9yOiNGMjhCNjIiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREYzNTQwIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSI1NzUuMiwxNDEuOSA1NjIuMywxMzQuNCA2MTMuOCw0NS4xIDYyNi43LDUyLjYgCSIvPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF80XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1MzEuMjkyNiIgeTE9IjU1Ny43MzIxIiB4Mj0iNTMxLjI5MjYiIHkyPSI0NTguNzU5NyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjc5NDUgLTAuNjA3MiAtMC42MDcyIC0wLjc5NDUgMzExLjgwODggODIyLjgxNzIpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwLjIzMzIiIHN0eWxlPSJzdG9wLWNvbG9yOiNGMjhCNjIiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREYzNTQwIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSI0NjEuNywxMzEuNyA0NDkuOCwxNDAuOCAzODcuMyw1OSAzOTkuMiw0OS45IAkiLz4KPC9nPgo8L3N2Zz4K",
    "codeImageExt": "svg+xml",
    "lang": "ua",
    "languages": {
        "timerTitle": {
            "de": "Gratuliere!",
            "en": "Congratulations!",
            "fr": "Félicitations!"
        },
        /* mobile field */
        "timerTitleMobile": {
            "de": "Gratuliere!M",
            "en": "Congratulations!M",
            "fr": "Félicitations!M"
        },
        "timerDescription": {
            "de": "Nur noch wenige Sekunden bis zu Ihrem Geschenk.",
            "en": "Only few seconds left to your gift",
            "fr": "Quelques secondes seulement avant votre cadeau."
        },
        "codeTitle": {
            "de": "Hier ist ihr geschenk!",
            "en": "Take your gift!",
            "fr": "Voici votre cadeau!"
        },
        /* mobile field */
        "codeTitleMobile": {
            "de": "Hier ist ihr geschenk!M",
            "en": "Take your gift!M",
            "fr": "Voici votre cadeau!M"
        },
        "codeDescription": {
            "de": "Mit diesem Code erhalten Sie 10% Rabatt auf das gesamte Sortiment.",
            "en": "This coupon code will apply 15% discount to any item in our shop!",
            "fr": "Avec ce code, vous bénéficiez d'une réduction de 10 % sur l'ensemble de la gamme."
        },
        /* mobile field */
        "codeDescriptionMobile": {
            "de": "Mit diesem Code erhalten Sie 10% Rabatt auf das gesamte Sortiment.M",
            "en": "This coupon code will apply 15% discount to any item in our shop!M",
            "fr": "Avec ce code, vous bénéficiez d'une réduction de 10 % sur l'ensemble de la gamme.M"
        },
        "headerText": {
            "de": "Fenster schliessen (Ich verzichte auf den Gewinn)",
            "en": "Close window (I refuse the profit)",
            "fr": "Fermer la fenêtre (je renonce à mon prix)"
        },
        "footerText": {
            "de": "Minimiere Fenster",
            "en": "Minimize this window",
            "fr": "Réduire la fenêtre"
        },
        "copyMessage": {
            "de": "Your Code has been copied",
            "en": "Your Code has been copied",
            "fr": "Your Code has been copied"
        },
        "copyCodeButtonTitle": {
            "de": "Copy code",
            "en": "Copy code",
            "fr": "Copy code"
        },
        "codeFirstScreenButtonTitle": {
            "de": "Zum gutschein",
            "en": "To the coupon",
            "fr": "To the coupon"
        }
    }
}