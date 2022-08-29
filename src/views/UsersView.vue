<template>
    <div>
        <h1>This is user page</h1>
        <table>
            <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Aksi</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Faiz</td>
                <td
                    ><router-link
                        :to="{ name: 'userDetail', params: { id: 'erika' } }"
                        :replace="true"
                        >Detail</router-link
                    ></td
                >
            </tr>
        </table>
    </div>

    <router-view name="helper" />
</template>
