set -o errexit  # exit on error

cd backend/config

pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate