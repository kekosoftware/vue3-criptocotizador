<template>
    <div>
        <form>
            <div>
                <label>
                    Moneda Nacional:
                </label>
                <div>
                    <select required>
                        <option value="" disabled selected>Seleccione una Moneda</option>
                        <option>$ARG</option>
                        <option>U$S</option>
                        <option>EUR</option>
                    </select>
                </div>
            </div>
            <div>
                <label>
                    Criptomonedas::
                </label>
                <div>
                    <select required>
                        <option value="" disabled selected>Seleccione una CriptoMoneda</option>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>ETC</option>
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

}
</script>

<style>

</style>