from django.shortcuts import render

ERROR_PAGE_TEMPLATE = "error.html"


def ui_handler400(request, exception):
    context = {"status": 400, "message": "Oups! Il y a eu une erreur...", "image": "/err_gif/400.webp"}
    return render(request, ERROR_PAGE_TEMPLATE, context=context)


def ui_handler403_csrf(request, reason=""):
    context = {"status": 403, "message": "HALTE! Vous n'avez pas la permission de faire ça...", "image": "/err_gif/403.gif"}
    return render(request, ERROR_PAGE_TEMPLATE, context=context)


def ui_handler403(request, exception):
    context = {"status": 403, "message": "HALTE! Vous n'avez pas le droit dêtre ici...", "image": "/err_gif/403.gif"}
    return render(request, ERROR_PAGE_TEMPLATE, context=context)


def ui_handler404(request, exception):
    print("404")
    context = {"status": 404, "message": "Mince! La page que vous cherchez n'existe pas...", "image": "/err_gif/404.gif"}
    return render(request, ERROR_PAGE_TEMPLATE, context=context)


def ui_handler500(request):
    context = {"status": 500, "message": "Fatal! Une erreur interne est survenue...", "image": "/err_gif/500.gif"}
    return render(request, ERROR_PAGE_TEMPLATE, context=context)
