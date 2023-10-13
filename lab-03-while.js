let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
i=0
while (arr[i] !== undefined) {
    if (arr[i] % 2 === 0) {
        console.log('Phan tu so chan trong mang:', arr[i]);
    }

    i = i + 1;
}
