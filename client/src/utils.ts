const baseUrl = 'http://localhost:1573';

async function get<T>(url:string): Promise<T> {
    const response = await fetch(`${baseUrl}${url}`)

    if (!response.ok) {
        throw new Error ("Network response was no ok")
    }

    return await response.json() as Promise<T>;
}

const fetcher = (url: string) => fetch(`${baseUrl}${url}`).then(res => res.json());

export { get, fetcher }