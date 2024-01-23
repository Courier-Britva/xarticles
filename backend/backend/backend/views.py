from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt  # Disable CSRF for this view. Be cautious, it's usually not recommended
def save_to_file(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        with open('data.txt', 'w') as f:
            f.write(data['textData'])
        return JsonResponse({"message": "Data saved successfully"})
    return JsonResponse({"message": "Invalid request"}, status=400)