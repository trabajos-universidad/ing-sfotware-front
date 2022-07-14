export const uploadFiles = async (file) => {
  if (!file) throw new Error('No file');

  const cloudUrl =
    'https://api.cloudinary.com/v1_1/dpwrhmgkc/upload?';

  const formData = new FormData();
  formData.append('upload_preset', 'ing-software');
  formData.append('file', file);

  try {
    const res = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) throw new Error('Something went wrong');

    const cloudResp = await res.json();

    console.log(cloudResp);

    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
