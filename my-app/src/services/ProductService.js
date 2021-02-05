export async function searchProducts(data) {
    const response = await fetch('/api/products');
    return await response.json();
}