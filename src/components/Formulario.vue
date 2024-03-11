<template>
    <div>
        <form @submit.prevent="$emit( 'infoMonedas', cripto, moneda )">
            <div>
                <label>
                    Moneda Nacional:
                </label>
                <div>
                    <select v-model="moneda" required>
                        <option value="" disabled selected>Seleccione una Moneda</option>
                        <option>AR</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </div>
            </div>
            <div>
                <label>
                    Criptomonedas::
                </label>
                <div>
                    <select v-model="cripto" required>
                        <option value="" disabled selected>Seleccione una CriptoMoneda</option>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>LTC</option>
                    </select>
                </div>
            </div>
            <div>
                <button type="submit" >Cotizar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        moneda: "",
        cripto: "",
    })
}
</script>

<style>

</style>