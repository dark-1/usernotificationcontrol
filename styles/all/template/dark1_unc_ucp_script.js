/**
 *
 * User Notification Control [UNC]. An extension for the phpBB Forum Software package.
 *
 * @copyright (c) 2020, Dark❶, https://dark1.tech
 * @license GNU General Public License, version 2 (GPL-2.0)
 *
 */

$('input:checkbox:checked:disabled').after(unc_tooltip_tick_body).remove();
$('input:checkbox:disabled').after(unc_tooltip_untick_body).remove();
