function dropdown() {
    document.getElementById("questions-dropdown").classList.toggle("show");
}

document.addEventListener('keypress', () => {
    document.getElementById("questions-dropdown").classList.remove("show");
});

document.querySelector('.help-description').addEventListener('click', () => {
    document.querySelector('.help-description-modal').style.display = "block";
});

document.querySelector('.help-description-modal-cross').addEventListener('click', () => {
    document.querySelector('.help-description-modal').style.display = "none";
});

document.querySelector('.help-manual').addEventListener('click', () => {
    document.querySelector('.help-manual-modal').style.display = "block";
});

document.querySelector('.help-manual-modal-cross').addEventListener('click', () => {
    document.querySelector('.help-manual-modal').style.display = "none";
});

document.querySelector('.help-how-to').addEventListener('click', () => {
    document.querySelector('.help-how-to-modal').style.display = "block";
});

document.querySelector('.help-how-to-modal-cross').addEventListener('click', () => {
    document.querySelector('.help-how-to-modal').style.display = "none";
});

document.querySelector('.travel-distance').addEventListener('click', () => {
    document.querySelector('.travel-distance-modal').style.display = "block";
});

document.querySelector('.travel-distance-modal-cross').addEventListener('click', () => {
    document.querySelector('.travel-distance-modal').style.display = "none";
});

document.querySelector('.travel-distance-graph-icon').addEventListener('click', () => {
    document.querySelector('.travel-distance-graph').style.display = "block";
    document.querySelector('.travel-distance-table').style.display = "none";
});

document.querySelector('.travel-distance-table-icon').addEventListener('click', () => {
    document.querySelector('.travel-distance-graph').style.display = "none";
    document.querySelector('.travel-distance-table').style.display = "block";
});

document.querySelector('.total-trip').addEventListener('click', () => {
    document.querySelector('.total-trip-modal').style.display = "block";
});

document.querySelector('.total-trip-modal-cross').addEventListener('click', () => {
    document.querySelector('.total-trip-modal').style.display = "none";
});

document.querySelector('.total-trip-graph-icon').addEventListener('click', () => {
    document.querySelector('.total-trip-graph').style.display = "block";
    document.querySelector('.total-trip-table').style.display = "none";
});

document.querySelector('.total-trip-table-icon').addEventListener('click', () => {
    document.querySelector('.total-trip-graph').style.display = "none";
    document.querySelector('.total-trip-table').style.display = "block";
});

document.querySelector('.driving-duration').addEventListener('click', () => {
    document.querySelector('.driving-duration-modal').style.display = "block";
});

document.querySelector('.driving-duration-modal-cross').addEventListener('click', () => {
    document.querySelector('.driving-duration-modal').style.display = "none";
});

document.querySelector('.driving-duration-graph-icon').addEventListener('click', () => {
    document.querySelector('.driving-duration-graph').style.display = "block";
    document.querySelector('.driving-duration-table').style.display = "none";
});

document.querySelector('.driving-duration-table-icon').addEventListener('click', () => {
    document.querySelector('.driving-duration-graph').style.display = "none";
    document.querySelector('.driving-duration-table').style.display = "block";
});

document.querySelector('.idle-duration').addEventListener('click', () => {
    document.querySelector('.idle-duration-modal').style.display = "block";
});

document.querySelector('.idle-duration-modal-cross').addEventListener('click', () => {
    document.querySelector('.idle-duration-modal').style.display = "none";
});

document.querySelector('.idle-duration-graph-icon').addEventListener('click', () => {
    document.querySelector('.idle-duration-graph').style.display = "block";
    document.querySelector('.idle-duration-table').style.display = "none";
});

document.querySelector('.idle-duration-table-icon').addEventListener('click', () => {
    document.querySelector('.idle-duration-graph').style.display = "none";
    document.querySelector('.idle-duration-table').style.display = "block";
});

document.querySelector('.stop-duration').addEventListener('click', () => {
    document.querySelector('.stop-duration-modal').style.display = "block";
});

document.querySelector('.stop-duration-modal-cross').addEventListener('click', () => {
    document.querySelector('.stop-duration-modal').style.display = "none";
});

document.querySelector('.stop-duration-graph-icon').addEventListener('click', () => {
    document.querySelector('.stop-duration-graph').style.display = "block";
    document.querySelector('.stop-duration-table').style.display = "none";
});

document.querySelector('.stop-duration-table-icon').addEventListener('click', () => {
    document.querySelector('.stop-duration-graph').style.display = "none";
    document.querySelector('.stop-duration-table').style.display = "block";
});

document.querySelector('.inactive-duration').addEventListener('click', () => {
    document.querySelector('.inactive-duration-modal').style.display = "block";
});

document.querySelector('.inactive-duration-modal-cross').addEventListener('click', () => {
    document.querySelector('.inactive-duration-modal').style.display = "none";
});

document.querySelector('.inactive-duration-graph-icon').addEventListener('click', () => {
    document.querySelector('.inactive-duration-graph').style.display = "block";
    document.querySelector('.inactive-duration-table').style.display = "none";
});

document.querySelector('.inactive-duration-table-icon').addEventListener('click', () => {
    document.querySelector('.inactive-duration-graph').style.display = "none";
    document.querySelector('.inactive-duration-table').style.display = "block";
});

document.querySelector('.average-speed').addEventListener('click', () => {
    document.querySelector('.average-speed-modal').style.display = "block";
});

document.querySelector('.average-speed-modal-cross').addEventListener('click', () => {
    document.querySelector('.average-speed-modal').style.display = "none";
});

document.querySelector('.average-speed-graph-icon').addEventListener('click', () => {
    document.querySelector('.average-speed-graph').style.display = "block";
    document.querySelector('.average-speed-table').style.display = "none";
});

document.querySelector('.average-speed-table-icon').addEventListener('click', () => {
    document.querySelector('.average-speed-graph').style.display = "none";
    document.querySelector('.average-speed-table').style.display = "block";
});

document.querySelector('.maximum-speed').addEventListener('click', () => {
    document.querySelector('.maximum-speed-modal').style.display = "block";
});

document.querySelector('.maximum-speed-modal-cross').addEventListener('click', () => {
    document.querySelector('.maximum-speed-modal').style.display = "none";
});

document.querySelector('.maximum-speed-graph-icon').addEventListener('click', () => {
    document.querySelector('.maximum-speed-graph').style.display = "block";
    document.querySelector('.maximum-speed-table').style.display = "none";
});

document.querySelector('.maximum-speed-table-icon').addEventListener('click', () => {
    document.querySelector('.maximum-speed-graph').style.display = "none";
    document.querySelector('.maximum-speed-table').style.display = "block";
});

document.querySelector('.fleet-parking-graph-icon').addEventListener('click', () => {
    document.querySelector('.fleet-parking-graph').style.display = "block";
    document.querySelector('.fleet-parking-table').style.display = "none";
});

document.querySelector('.fleet-parking-table-icon').addEventListener('click', () => {
    document.querySelector('.fleet-parking-graph').style.display = "none";
    document.querySelector('.fleet-parking-table').style.display = "block";
});

document.querySelector('.fleet-utilisation-graph-icon').addEventListener('click', () => {
    document.querySelector('.fleet-utilisation-graph').style.display = "block";
    document.querySelector('.fleet-utilisation-table').style.display = "none";
});

document.querySelector('.fleet-utilisation-table-icon').addEventListener('click', () => {
    document.querySelector('.fleet-utilisation-graph').style.display = "none";
    document.querySelector('.fleet-utilisation-table').style.display = "block";
});

document.querySelector('.fleet-inactive-graph-icon').addEventListener('click', () => {
    document.querySelector('.fleet-inactive-graph').style.display = "block";
    document.querySelector('.fleet-inactive-table').style.display = "none";
});

document.querySelector('.fleet-inactive-table-icon').addEventListener('click', () => {
    document.querySelector('.fleet-inactive-graph').style.display = "none";
    document.querySelector('.fleet-inactive-table').style.display = "block";
});

document.querySelector('.top-10-bad-drivers-graph-icon').addEventListener('click', () => {
    document.querySelector('.top-10-bad-drivers-graph').style.display = "block";
    document.querySelector('.top-10-bad-drivers-table').style.display = "none";
});

document.querySelector('.top-10-bad-drivers-table-icon').addEventListener('click', () => {
    document.querySelector('.top-10-bad-drivers-graph').style.display = "none";
    document.querySelector('.top-10-bad-drivers-table').style.display = "block";
});

document.querySelector('.fleet-violation-graph-icon').addEventListener('click', () => {
    document.querySelector('.fleet-violation-graph').style.display = "block";
    document.querySelector('.fleet-violation-table').style.display = "none";
});

document.querySelector('.fleet-violation-table-icon').addEventListener('click', () => {
    document.querySelector('.fleet-violation-graph').style.display = "none";
    document.querySelector('.fleet-violation-table').style.display = "block";
});

document.querySelector('.gps-model-summary-graph-icon').addEventListener('click', () => {
    document.querySelector('.gps-model-summary-graph').style.display = "block";
    document.querySelector('.gps-model-summary-table').style.display = "none";
});

document.querySelector('.gps-model-summary-table-icon').addEventListener('click', () => {
    document.querySelector('.gps-model-summary-graph').style.display = "none";
    document.querySelector('.gps-model-summary-table').style.display = "block";
});

document.querySelector('.safety-score-graph-icon').addEventListener('click', () => {
    document.querySelector('.safety-score-graph').style.display = "block";
    document.querySelector('.safety-score-table').style.display = "none";
});

document.querySelector('.safety-score-table-icon').addEventListener('click', () => {
    document.querySelector('.safety-score-graph').style.display = "none";
    document.querySelector('.safety-score-table').style.display = "block";
});

document.querySelector('.expense-history-graph-icon').addEventListener('click', () => {
    document.querySelector('.expense-history-graph').style.display = "block";
    document.querySelector('.expense-history-table').style.display = "none";
});

document.querySelector('.expense-history-table-icon').addEventListener('click', () => {
    document.querySelector('.expense-history-graph').style.display = "none";
    document.querySelector('.expense-history-table').style.display = "block";
});

document.querySelector('.project-vs-total-object-graph-icon').addEventListener('click', () => {
    document.querySelector('.project-vs-total-object-graph').style.display = "block";
    document.querySelector('.project-vs-total-object-table').style.display = "none";
});

document.querySelector('.project-vs-total-object-table-icon').addEventListener('click', () => {
    document.querySelector('.project-vs-total-object-graph').style.display = "none";
    document.querySelector('.project-vs-total-object-table').style.display = "block";
});

document.querySelector('.fuel-refil-vs-drain-graph-icon').addEventListener('click', () => {
    document.querySelector('.fuel-refil-vs-drain-graph').style.display = "block";
    document.querySelector('.fuel-refil-vs-drain-table').style.display = "none";
});

document.querySelector('.fuel-refil-vs-drain-table-icon').addEventListener('click', () => {
    document.querySelector('.fuel-refil-vs-drain-graph').style.display = "none";
    document.querySelector('.fuel-refil-vs-drain-table').style.display = "block";
});

document.querySelector('.postpaid-user-detail-graph-icon').addEventListener('click', () => {
    document.querySelector('.postpaid-user-detail-graph').style.display = "block";
    document.querySelector('.postpaid-user-detail-table').style.display = "none";
});

document.querySelector('.postpaid-user-detail-table-icon').addEventListener('click', () => {
    document.querySelector('.postpaid-user-detail-graph').style.display = "none";
    document.querySelector('.postpaid-user-detail-table').style.display = "block";
});

document.querySelector('.fuel-vs-distance-graph-icon').addEventListener('click', () => {
    document.querySelector('.fuel-vs-distance-graph').style.display = "block";
    document.querySelector('.fuel-vs-distance-table').style.display = "none";
});

document.querySelector('.fuel-vs-distance-table-icon').addEventListener('click', () => {
    document.querySelector('.fuel-vs-distance-graph').style.display = "none";
    document.querySelector('.fuel-vs-distance-table').style.display = "block";
});

document.querySelector('.fleet-idling-graph-icon').addEventListener('click', () => {
    document.querySelector('.fleet-idling-graph').style.display = "block";
    document.querySelector('.fleet-idling-table').style.display = "none";
});

document.querySelector('.fleet-idling-table-icon').addEventListener('click', () => {
    document.querySelector('.fleet-idling-graph').style.display = "none";
    document.querySelector('.fleet-idling-table').style.display = "block";
});

document.querySelector('.fitness-certificate-due').addEventListener('click', () => {
    document.querySelector('.fitness-certificate-due-modal').style.display = "block";
});

document.querySelector('.fitness-certificate-due-modal-cross').addEventListener('click', () => {
    document.querySelector('.fitness-certificate-due-modal').style.display = "none";
});

document.querySelector('.fitness-certificate-overdue').addEventListener('click', () => {
    document.querySelector('.fitness-certificate-overdue-modal').style.display = "block";
});

document.querySelector('.fitness-certificate-overdue-modal-cross').addEventListener('click', () => {
    document.querySelector('.fitness-certificate-overdue-modal').style.display = "none";
});

document.querySelector('.fitness-certificate-upcoming').addEventListener('click', () => {
    document.querySelector('.fitness-certificate-upcoming-modal').style.display = "block";
});

document.querySelector('.fitness-certificate-upcoming-modal-cross').addEventListener('click', () => {
    document.querySelector('.fitness-certificate-upcoming-modal').style.display = "none";
});

document.querySelector('.insurance-due').addEventListener('click', () => {
    document.querySelector('.insurance-due-modal').style.display = "block";
});

document.querySelector('.insurance-due-modal-cross').addEventListener('click', () => {
    document.querySelector('.insurance-due-modal').style.display = "none";
});

document.querySelector('.insurance-overdue').addEventListener('click', () => {
    document.querySelector('.insurance-overdue-modal').style.display = "block";
});

document.querySelector('.insurance-overdue-modal-cross').addEventListener('click', () => {
    document.querySelector('.insurance-overdue-modal').style.display = "none";
});

document.querySelector('.insurance-upcoming').addEventListener('click', () => {
    document.querySelector('.insurance-upcoming-modal').style.display = "block";
});

document.querySelector('.insurance-upcoming-modal-cross').addEventListener('click', () => {
    document.querySelector('.insurance-upcoming-modal').style.display = "none";
});

document.querySelector('.minor-details').addEventListener('click', () => {
    document.querySelector('.object-health-minor-modal').style.display = "block";
});

document.querySelector('.object-health-minor-modal-cross').addEventListener('click', () => {
    document.querySelector('.object-health-minor-modal').style.display = "none";
});

document.querySelector('.major-details').addEventListener('click', () => {
    document.querySelector('.object-health-major-modal').style.display = "block";
});

document.querySelector('.object-health-major-modal-cross').addEventListener('click', () => {
    document.querySelector('.object-health-major-modal').style.display = "none";
});

document.querySelector('.critical-details').addEventListener('click', () => {
    document.querySelector('.object-health-critical-modal').style.display = "block";
});

document.querySelector('.object-health-critical-modal-cross').addEventListener('click', () => {
    document.querySelector('.object-health-critical-modal').style.display = "none";
});

document.querySelector('.oil-change-due').addEventListener('click', () => {
    document.querySelector('.oil-change-due-modal').style.display = "block";
});

document.querySelector('.oil-change-due-modal-cross').addEventListener('click', () => {
    document.querySelector('.oil-change-due-modal').style.display = "none";
});

document.querySelector('.oil-change-overdue').addEventListener('click', () => {
    document.querySelector('.oil-change-overdue-modal').style.display = "block";
});

document.querySelector('.oil-change-overdue-modal-cross').addEventListener('click', () => {
    document.querySelector('.oil-change-overdue-modal').style.display = "none";
});

document.querySelector('.oil-change-upcoming').addEventListener('click', () => {
    document.querySelector('.oil-change-upcoming-modal').style.display = "block";
});

document.querySelector('.oil-change-upcoming-modal-cross').addEventListener('click', () => {
    document.querySelector('.oil-change-upcoming-modal').style.display = "none";
});

document.querySelector('.coolant-flush-due').addEventListener('click', () => {
    document.querySelector('.coolant-flush-due-modal').style.display = "block";
});

document.querySelector('.coolant-flush-due-modal-cross').addEventListener('click', () => {
    document.querySelector('.coolant-flush-due-modal').style.display = "none";
});

document.querySelector('.coolant-flush-overdue').addEventListener('click', () => {
    document.querySelector('.coolant-flush-overdue-modal').style.display = "block";
});

document.querySelector('.coolant-flush-overdue-modal-cross').addEventListener('click', () => {
    document.querySelector('.coolant-flush-overdue-modal').style.display = "none";
});

document.querySelector('.coolant-flush-upcoming').addEventListener('click', () => {
    document.querySelector('.coolant-flush-upcoming-modal').style.display = "block";
});

document.querySelector('.coolant-flush-upcoming-modal-cross').addEventListener('click', () => {
    document.querySelector('.coolant-flush-upcoming-modal').style.display = "none";
});

document.querySelector('.car-wash-due').addEventListener('click', () => {
    document.querySelector('.car-wash-due-modal').style.display = "block";
});

document.querySelector('.car-wash-due-modal-cross').addEventListener('click', () => {
    document.querySelector('.car-wash-due-modal').style.display = "none";
});

document.querySelector('.car-wash-overdue').addEventListener('click', () => {
    document.querySelector('.car-wash-overdue-modal').style.display = "block";
});

document.querySelector('.car-wash-overdue-modal-cross').addEventListener('click', () => {
    document.querySelector('.car-wash-overdue-modal').style.display = "none";
});

document.querySelector('.car-wash-upcoming').addEventListener('click', () => {
    document.querySelector('.car-wash-upcoming-modal').style.display = "block";
});

document.querySelector('.car-wash-upcoming-modal-cross').addEventListener('click', () => {
    document.querySelector('.car-wash-upcoming-modal').style.display = "none";
});

document.querySelector('.general-servicing-due').addEventListener('click', () => {
    document.querySelector('.general-servicing-due-modal').style.display = "block";
});

document.querySelector('.general-servicing-due-modal-cross').addEventListener('click', () => {
    document.querySelector('.general-servicing-due-modal').style.display = "none";
});

document.querySelector('.general-servicing-overdue').addEventListener('click', () => {
    document.querySelector('.general-servicing-overdue-modal').style.display = "block";
});

document.querySelector('.general-servicing-overdue-modal-cross').addEventListener('click', () => {
    document.querySelector('.general-servicing-overdue-modal').style.display = "none";
});

document.querySelector('.general-servicing-upcoming').addEventListener('click', () => {
    document.querySelector('.general-servicing-upcoming-modal').style.display = "block";
});

document.querySelector('.general-servicing-upcoming-modal-cross').addEventListener('click', () => {
    document.querySelector('.general-servicing-upcoming-modal').style.display = "none";
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.getElementById("questions-dropdown").classList.remove("show");
        document.querySelector('.help-description-modal').style.display = "none";
        document.querySelector('.help-manual-modal').style.display = "none";
        document.querySelector('.help-how-to-modal').style.display = "none";
        document.querySelector('.travel-distance-modal').style.display = "none";
        document.querySelector('.total-trip-modal').style.display = "none";
        document.querySelector('.stop-duration-modal').style.display = "none";
        document.querySelector('.idle-duration-modal').style.display = "none";
        document.querySelector('.inactive-duration-modal').style.display = "none";
        document.querySelector('.driving-duration-modal').style.display = "none";
        document.querySelector('.average-speed-modal').style.display = "none";
        document.querySelector('.maximum-speed-modal').style.display = "none";
        document.querySelector('.fitness-certificate-due-modal').style.display = "none";
        document.querySelector('.fitness-certificate-overdue-modal').style.display = "none";
        document.querySelector('.fitness-certificate-upcoming-modal').style.display = "none";
        document.querySelector('.insurance-due-modal').style.display = "none";
        document.querySelector('.insurance-overdue-modal').style.display = "none";
        document.querySelector('.insurance-upcoming-modal').style.display = "none";
        document.querySelector('.object-health-minor-modal').style.display = "none";
        document.querySelector('.object-health-major-modal').style.display = "none";
        document.querySelector('.object-health-critical-modal').style.display = "none";
        document.querySelector('.oil-change-due-modal').style.display = "none";
        document.querySelector('.oil-change-overdue-modal').style.display = "none";
        document.querySelector('.oil-change-upcoming-modal').style.display = "none";
        document.querySelector('.coolant-flush-due-modal').style.display = "none";
        document.querySelector('.coolant-flush-overdue-modal').style.display = "none";
        document.querySelector('.coolant-flush-upcoming-modal').style.display = "none";
        document.querySelector('.car-wash-due-modal').style.display = "none";
        document.querySelector('.car-wash-overdue-modal').style.display = "none";
        document.querySelector('.car-wash-upcoming-modal').style.display = "none";
        document.querySelector('.general-servicing-due-modal').style.display = "none";
        document.querySelector('.general-servicing-overdue-modal').style.display = "none";
        document.querySelector('.general-servicing-upcoming-modal').style.display = "none";
    }
};