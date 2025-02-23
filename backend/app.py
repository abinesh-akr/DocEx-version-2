from flask import Flask, request, jsonify

from gate import process_gate
from aadhar import process_aadhar
from income import process_income
from flask_cors import CORS
import os
import base64
app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
CORS(app) 


@app.route('/api/income', methods=['POST','GET'])
def income():
    print("📌 /api/income endpoint hit!")  # Debugging
    if 'file' not in request.files:
        print("❌ No file uploaded")
        return jsonify({'error': 'No file uploaded.'}), 400

    file = request.files['file']

    if file.filename == '':
        print("❌ No file selected")
        return jsonify({'error': 'No file selected.'}), 400

    file_path = os.path.join('uploads', file.filename)
    
    try:
        file.save(file_path)
        print(f"✅ File saved at: {file_path}")  # Debugging

        extracted_text, output_image = process_income(file_path)  # CALLING FUNCTION

        print("✅ Function executed successfully!")  # If this prints, function ran without crashing

        images_base64 = []
        for img in output_image:
            img.seek(0)
            img_base64 = base64.b64encode(img.read()).decode('utf-8')
            images_base64.append(img_base64)

        return jsonify({
            'text': extracted_text,
            'images': images_base64
        })

    except Exception as e:
        print(f"❌ Error in /api/income: {e}")  # Show error in terminal
        return jsonify({'error': str(e)}), 500

@app.route('/api/gate', methods=['POST','GET'])
def gate():
    print("📌 /api/gate endpoint hit!")  # Debugging
    if 'file' not in request.files:
        print("❌ No file uploaded")
        return jsonify({'error': 'No file uploaded.'}), 400

    file = request.files['file']

    if file.filename == '':
        print("❌ No file selected")
        return jsonify({'error': 'No file selected.'}), 400

    file_path = os.path.join('uploads', file.filename)
    
    try:
        file.save(file_path)
        print(f"✅ File saved at: {file_path}")  # Debugging

        extracted_text, output_image = process_gate(file_path)  # CALLING FUNCTION

        print("✅ Function executed successfully!")  # If this prints, function ran without crashing

        images_base64 = []
        for img in output_image:
            img.seek(0)
            img_base64 = base64.b64encode(img.read()).decode('utf-8')
            images_base64.append(img_base64)

        return jsonify({
            'text': extracted_text,
            'images': images_base64
        })

    except Exception as e:
        print(f"❌ Error in /api/gate: {e}")  # Show error in terminal
        return jsonify({'error': str(e)}), 500

@app.route('/api/aadhar', methods=['POST', 'GET'])
def aadhar():
    print("📌 /api/aadhar endpoint hit!")  # Debugging
    if 'file' not in request.files:
        print("❌ No file uploaded")
        return jsonify({'error': 'No file uploaded.'}), 400

    file = request.files['file']

    if file.filename == '':
        print("❌ No file selected")
        return jsonify({'error': 'No file selected.'}), 400

  
    
    try:
        os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

        # ✅ Save the file
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
        file.save(file_path)
        print(f"✅ File saved at: {file_path}")  # Debugging

        extracted_text, output_image = process_aadhar(file_path)  # CALLING FUNCTION

        print("✅ Function executed successfully!")  # If this prints, function ran without crashing

        images_base64 = []
        for img in output_image:
            img.seek(0)
            img_base64 = base64.b64encode(img.read()).decode('utf-8')
            images_base64.append(img_base64)

        return jsonify({
            'text': extracted_text,
            'images': images_base64
        })

    except Exception as e:
        print(f"❌ Error in /api/aadhar: {e}")  # Show error in terminal
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(host="0.0.0.0",debug=True,port=5000)  # ✅ Allows external access

